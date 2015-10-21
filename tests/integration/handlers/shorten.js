"use strict";

let abridge = require('../../../server.js')
let expect = require('code').expect; //assertion library
let lab = exports.lab = require('lab').script();
let Wreck = require('wreck'); //http client

lab.context = lab.experiment;

lab.experiment('POST /shorten', function() {
  const original_url = "http://pygeek.com";
  const shortened_url = "http://py.geek/abc123";
  const error_message = "This is an error message";
  const url = abridge.server.info.uri + '/shorten';
  const payload = { payload: JSON.stringify({ 'url': original_url }) };

  lab.context('when params contains a url', function() {
    let response;
    let responseBody;

    lab.beforeEach(function(done) {
      //TODO: mock method for generating shortened_url

      Wreck.request('post', url, payload, function(err, res, payload) {
        expect(err).to.not.exist()
        response = res;

        Wreck.read(res, null, function(err, body) {
          responseBody = JSON.parse(body.toString());
          done()
        })
      })
    })

    lab.test('creates a record', function(done) {
      done();
    })
    lab.test('response contains status code 201', function(done) {
      expect(response.statusCode).to.equal(201)
      done();
    })
    lab.test('response contains shortened url', function(done) {
      expect(responseBody.short_url).to.equal(shortened_url)
      done();
    })
    lab.test('response contains original url', function(done) {
      expect(responseBody.original_url).to.equal(original_url)
      done();
    })
    lab.test('response contains json', function(done) {
      expect(responseBody).to.be.an.object
      done();
    })
  })

  lab.context('when params does not contain a url', function() {
    let response;
    let responseBody;

    lab.beforeEach(function(done) {

      Wreck.request('post', url, { payload: "" }, function(err, res, payload) {
        expect(err).to.not.exist()
        response = res;

        Wreck.read(res, null, function(err, body) {
          responseBody = JSON.parse(body.toString());
          done()
        })
      })
    })

    lab.test('response contains status code 400', function(done) {
      expect(response.statusCode).to.equal(400)
      done();
    })
    lab.test('response contains error message', function(done){
      expect(responseBody.error_message).to.be.equal(error_message)
      done();
    })
    lab.test('response contains json', function(done) {
      expect(responseBody).to.be.an.object
      done();
    })
  })
})
