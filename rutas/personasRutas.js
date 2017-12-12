module.exports = function(app) {
  var users = require('../controlador/personasControlador');

  app.route('/users')
    .get(users.listarTodosUsers);
}
