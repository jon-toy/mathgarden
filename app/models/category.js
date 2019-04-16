var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var CategorySchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    directions: String
});

CategorySchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', CategorySchema);