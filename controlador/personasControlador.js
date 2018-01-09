var mongoose = require('mongoose');

var User = mongoose.model('Users');

exports.listarTodosUsers = function(req, res) {
  User.find({}, function (err, datos){
    if (err) throw err;
    res.json(datos);
  });
};
exports.crearUser = function(req, res) {
    var user  = new User(req.body);
      user.save(function(err, data) {
            if (err)
              res.send(err);
          console.log('Usuario añadido: ' + user);
          res.status(301).json(data);
      });
};

exports.listarUnUsers = function(req, res) {
    User.find({email : req.params.email}, function(err, data) {
          if (err)
            res.send(err);
        res.json(data);
          });
};

exports.borrarUnUsers = function(req, res) {


    User.remove({email : req.params.email
        }, function(err, data) {
              if (err)
            res.send(err);
        res.json({ message: 'Usuario/s borrado/s correctamente' });
          });
};


exports.actualizarUnUsers = function(req, res) {
    User.update({email : req.params.email}, req.body, { upsert: true, new: true }, function(err, data) {
          if (err)
            res.send(err);
        res.json(data);
          });
};
