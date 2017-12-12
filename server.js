var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./modelo/personasModelo'), //created model loading here
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ejercicio');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./rutas/personasRutas'); //importing route
routes(app); //register the route



app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
