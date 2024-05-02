const Survey = require('../models/surveyModel')

exports.survey = async (req, res) => {
    try {
        const { answers } = req.body;
        const survey = new Survey({ answers });
        await survey.save();
        res.status(201).json({ message: "Survey saved successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}