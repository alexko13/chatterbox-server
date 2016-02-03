/* Import node's http module: */
var http = require("http");
var handleRequest = require("./request-handler").requestHandler;

var port = 3000;
var ip = "127.0.0.1";

var URL = /\/classes./;

var server = http.createServer(function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  if(URL.test(request.url)) {
    handleRequest(request, response);
  } else {
    var defaultCorsHeaders = {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
      "access-control-allow-headers": "content-type, accept",
      "access-control-max-age": 10, // Seconds.
      "Content-Type": "application/json"
    };
    response.writeHead(404, defaultCorsHeaders);
    response.end();
  }
});
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
