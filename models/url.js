var mongoose = require('mongoose');
var timestamp = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var UrlSchema = new Schema({
  urlcontent: String,
  status: {type: Number, default: 0},
  preguntas: [{}]

});

UrlSchema.plugin(timestamp);
// Export the model
module.exports = mongoose.model('Url', UrlSchema);
