const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    answers: {
        type: Object,
        required: true,
    }
});

module.exports = mongoose.model('Answers', surveySchema);
