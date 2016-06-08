var mongoose =require('mongoose');
var maincat = new mongoose.Schema({
  id : {
    type:Number,
    required: true
    },
  name: {
    type:String,
    required: true
    }
},{collection:'maincat'});

module.exports = mongoose.model('maincat',maincat);