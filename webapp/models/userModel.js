var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({	"name" : String,	"addr" : String,	"job" : String});

module.exports = mongoose.model('user', userSchema);