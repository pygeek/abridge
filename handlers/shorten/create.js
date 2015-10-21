"use strict";

module.exports = function(request, reply) {
  //TODO: generate short url based on payload.url
  let code;
  let obj;

  if (request.headers['content-length'] > 0) {
    code = 201

    obj = {
      "short_url": "http://py.geek/abc123",
      "original_url": request.payload.url,
    }
  }
  else {
    code = 400;

    obj = {
      "error_message": "This is an error message"
    }
  }

  return reply(obj).code(code)
};
