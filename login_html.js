var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var url = req.url;
    if(req.url == '/'){
        console.log('url : '+ url);
        url = '/index.html';
        res.end(fs.readFileSync(__dirname + url));
    } else if ( req.url == '/login'){
        console.log(url);
        url = '/login.html';
        res.end(fs.readFileSync(__dirname + url));
    } else {
        console.log('그리고 아무것도 일어나지 않았따-');
    }
    console.log('client 접속');
    
}).listen(8080);