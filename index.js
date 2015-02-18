var http = require('http'),
    url = require('url');

var server = http.createServer(function(req, res) {
    var parsedURL = url.parse(req.url);
    if(parsedURL.pathname == '/healthcheck') {
        res.writeHead(200);
        console.log("200 - /healthcheck");
        res.end()
    } else {
        res.statusCode = 301;
        var hostname = "firstdoit.com";
        var location = "http://" + hostname + parsedURL.pathname + "?utm_source=" + req.headers.host;
        res.setHeader("Location", location);
        console.log("301 - " + location);
        res.end();
    }
});

server.listen(process.env.PORT || 8083);
