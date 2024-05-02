import React, { useState } from "react";
import axios from "axios";
import { questions, options, formQuestion } from "../utils/formValue.js";
import { Button, Card, Flex, Form, Typography, notification } from "antd";

const SurveyForm = () => {
  const [answers, setAnswers] = useState(formQuestion);

  const handleOptionClick = (questionKey, value) => {
    // Check if the clicked option is already selected
    if (answers[questionKey] === value) {
      // If it is, deselect it by setting the value to an empty string
      setAnswers({ ...answers, [questionKey]: "" });
    } else {
      // If it's not selected, set the clicked option as the new value
      setAnswers({ ...answers, [questionKey]: value });
    }
  };

  const handleSubmit = async () => {
    const isAnswerEmpty = Object.values(answers).some(
      (answer) => answer === ""
    );
    if (isAnswerEmpty) {
      notification.error({
        message: "Error",
        description:
          "Please answer all the questions before submitting the form",
      });
      return;
    }
    try {
      await axios.post("http://localhost:3333/api/survey", { answers });
      notification.success({
        message: "Success",
        description: "We successfully received all the answers. Thank you!",
      });
      setAnswers(formQuestion);
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Error submitting survey",
      });
      console.error("Error submitting survey:", error);
    }
  };

  return (
    <Card className="form-container">
      <Flex gap="large" align="left" vertical flex={1}>
        <Typography.Title level={6} strong className="title">
          Survey Form
        </Typography.Title>
        {questions.map((question, index) => (
          <Form layout="vertical" key={index} className="question-container">
            <Typography.Title level={3} strong className="title">
              {question.text}
            </Typography.Title>

            {options.map((option, optionIndex) => {
              const isSelected =
                answers[question.key] === String(optionIndex + 1);
              return (
                <Button
                  key={optionIndex}
                  className={isSelected ? "selected" : "btn-container"}
                  onClick={() =>
                    handleOptionClick(question.key, String(optionIndex + 1))
                  }
                  name={question.key}
                >
                  {option}
                </Button>
              );
            })}
          </Form>
        ))}
        <Button size="large" className="btn" onClick={handleSubmit}>
          Submit
        </Button>
      </Flex>
    </Card>
  );
};

export default SurveyForm;
