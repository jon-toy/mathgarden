var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var QuestionSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    question: String,
    answer: String
});

CategorySchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', QuestionSchema);