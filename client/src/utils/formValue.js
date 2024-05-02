
// Declaration of Options for each Questions
export const options = [
    "Very Inaccurate",
    "Moderately Inaccurate",
    "Neither Accurate Nor Inaccurate",
    "Moderately Accurate",
    "Very Accurate"];
// All the Questions are declared here
export const questions = [
    { key: 'Q1', text: '1. I worry about things' },
    { key: 'Q2', text: '2. I make friends easily' },
    { key: 'Q3', text: '3. I have a vivid imagination' },

];
// Used the reduce method to itetarate all the questions declared.
export const formQuestion = questions.reduce((acc, curr) => {
    acc[curr.key] = '';
    return acc;
}, {});