var sendResponse = require("./send-response");

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
