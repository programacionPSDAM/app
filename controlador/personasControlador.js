var mongoose = require('mongoose');

var User = mongoose.model('Users');

exports.listarTodosUsers = function(req, res) {
  User.find({}, function (err, datos){
    if (err) throw err;
    res.json(datos);
  });
};
