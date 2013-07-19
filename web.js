var express = require('express');

var app = express.createServer(express.logger());
/*
app.get('/', function(request, response) {
  fs = require('fs');

  var buf = new Buffer(fs.readFileSync('index.html', 'utf8'));

  response.send('Temp \n');

});
*/
app.get('/', function(request, response) {
  response.send('Hello World 4!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
})
