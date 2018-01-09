module.exports = function(app) {
  var users = require('../controlador/personasControlador');

  app.route('/users')
    .get(users.listarTodosUsers)
    .post(users.crearUser);

  app.route('/users/:email')
    .get(users.listarUnUsers)
    .delete(users.borrarUnUsers)
    .put(users.actualizarUnUsers);
}
