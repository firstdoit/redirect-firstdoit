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
        res.setHeader("Location", "http://blog.firstdoit.com"+parsedURL.pathname+"?utm_source=gadrme");
        console.log("301 - " + parsedURL.pathname);
        res.end();
    }
});

server.listen(process.env.PORT || 8081);