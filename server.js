"use strict";

let Hapi = require('hapi');
let server = new Hapi.Server();
let routes = require('./routes/index');


server.connection({ port: 3000 });

server.route(routes);


//beta 1
//
//Route #1
//GET
//Abridge home page
//
//Route #2
//GET
//Permanent redirect to related url
//
//Route #3
//POST
//Takes in arbitrary url
//Creates a hash and associates it to that url
//Returns json data containing hash and 201 response code
//
//beta 2
//https
//api key in header
//
//beta 3
//oauth authentication scheme
//

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
