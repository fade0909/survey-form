const express = require('express');
const surveyController = require('../controllers/surveyController');

const router = express.Router();

router.post('/survey', surveyController.survey)

module.exports = router;
