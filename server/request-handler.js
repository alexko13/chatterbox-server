
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"
};

exports.requestHandler = function(request, response) {

  var URI = /\/classes./;

  if(request.method === 'OPTIONS' && URI.test(request.url)) {
    response.writeHead(200, defaultCorsHeaders);
    response.end();
  } else if(request.method === 'GET' && URI.test(request.url)) {
    response.writeHead(200, defaultCorsHeaders);
    response.end(JSON.stringify(storage));
  } else if(request.method === 'POST' && URI.test(request.url)) {
    response.writeHead(201, defaultCorsHeaders);
    request.on('data', function(data) {
      storage.results.unshift(JSON.parse(data));
    });
    response.end(JSON.stringify(storage));
  } else {
    response.writeHead(404, defaultCorsHeaders);
    response.end();
  }
};

var storage = {
  results: []
};
