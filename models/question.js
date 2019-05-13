var mongoose = require('mongoose');
var timestamp = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: String,
  tipo: Number

});

QuestionSchema.plugin(timestamp);
// Export the model
module.exports = mongoose.model('Question', QuestionSchema);
