
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"
};

exports.requestHandler = function(request, response) {

  if(request.method === 'OPTIONS') {
    response.writeHead(200, defaultCorsHeaders);
    response.end();
  } else if(request.method === 'GET') {
    response.writeHead(200, defaultCorsHeaders);
    response.end(JSON.stringify(storage));
  } else if(request.method === 'POST') {
    request.on('data', function(data) {
      storage.results.unshift(JSON.parse(data));
    });
    response.writeHead(201, defaultCorsHeaders);
    response.end(JSON.stringify(storage));
  }
  
};

var storage = {
  results: []
};
