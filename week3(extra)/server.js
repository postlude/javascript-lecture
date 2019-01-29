var http = require("http");
var fs = require('fs');

http.createServer(function(req, res) {
    console.log(req.url);
    var html = fs.readFileSync(__dirname+'/index.html');
    // res.writeHead(200, { "Content-type": "text/plain" });
    res.writeHead(200, { "Content-type": "text/html" });
    // res.end('hello node');
    res.end(html);

    // var html = fs.createReadStream(__dirname+'/index.html');
    // res.pipe(html);
}).listen(3000).on('listening', function() {
    console.log('server listening on port 3000')
});