var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema ({
//  _id = mongoose.Type.ObjectId(),
  _id : Number,
  first_name : String,
  last_name : String,
  email : {type : String, unique : true}
});

var User = mongoose.model('Users', userSchema);
module.exports=User;
