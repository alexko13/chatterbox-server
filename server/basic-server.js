/* Import node's http module: */
var http = require("http");
var sendResponse = require("./send-response");
var handleRequest = require("./request-handler").requestHandler;

var port = 3000;
var ip = "127.0.0.1";
var URL = /\/classes\/.*/;

var server = http.createServer(function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  if(URL.test(request.url)) {
    handleRequest(request, response);
  } else {
    sendResponse(request, response, 404);
  }
});
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
