
var requestHandler = function(request, response) {

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "application/json";

  var URI = /\/classes./;

  if(request.method === 'OPTIONS' && URI.test(request.url)) {
    response.writeHead(200, headers);
    response.end();
  } else if(request.method === 'GET' && URI.test(request.url)) {
    response.writeHead(200, headers);
    response.end(JSON.stringify(storage));
  } else if(request.method === 'POST' && URI.test(request.url)) {
    response.writeHead(201, headers);
    request.on('data', function(data) {
      storage.results.unshift(JSON.parse(data));
    });
    response.end(JSON.stringify(storage));
  } else {
    response.writeHead(404, headers);
    response.end();
  }
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var storage = {
  results: []
};

module.exports.requestHandler = requestHandler;
