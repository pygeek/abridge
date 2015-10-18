"use strict";

let routes = [
  {
    method: 'GET',
    path: '/',
    handler: require('../handlers/home/get')
  }, {
    method: 'GET',
    path: '/{id}',
    handler: require('../handlers/expand/get')
  }, {
    method: 'POST',
    path: '/shorten',
    handler: require('../handlers/shorten/create')
  }
];


module.exports = routes;
