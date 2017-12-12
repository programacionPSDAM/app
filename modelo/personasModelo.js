var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema ({
  id : Number,
  first_name : String,
  last_name : String,
  email : String
});

var User = mongoose.model('Users', userSchema);
module.exports=User;
