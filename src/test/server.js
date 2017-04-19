//Require dev-dependencies
let expect = require('chai').expect;
let request = require('request');
let server = require('../app/server');

describe("Hello World API", function() {
  var url = "http://localhost:4000/api";
  it ("Returns status code 200", function() {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });
});
