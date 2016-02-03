var sendResponse = function(request, response, code, data) {
  var defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10, // Seconds.
    "Content-Type": "application/json"
  };

  response.writeHead(code, defaultCorsHeaders);
  response.end(JSON.stringify(data));

};

exports.requestHandler = function(request, response) {

  if(request.method === 'OPTIONS') {
    sendResponse(request, response, 200);
  } else if(request.method === 'GET') {
    sendResponse(request, response, 200, storage);
  } else if(request.method === 'POST') {
    request.on('data', function(data) {
      storage.results.unshift(JSON.parse(data));
    });
    sendResponse(request, response, 201, storage);
  }

};

var storage = {
  results: []
};
