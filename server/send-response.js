module.exports = function(request, response, code, data) {
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