var mongoose =require('mongoose');
var subcat = new mongoose.Schema({
  ref_id: {
    type:Number,
    required: true
    },
  name:{
    type:String,
    required: true
    }
},{collection:'subcat'});

module.exports= mongoose.model('subcat',subcat);

