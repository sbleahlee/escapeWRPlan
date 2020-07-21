var http = require('http');
var fs = require('fs');
const paserurl = require('url');
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

http.createServer(function (req, res) {
    const { headers, method, url } = req;
    const pathname = paserurl.parse(url, true).pathname;

    if(pathname == '/'){
        if(method == 'GET'){
            console.log('METHOD : ', method); //GET part
            console.log('URL : ', url);
            const queryObject = paserurl.parse(url, true).query; //parsing URL. object-tpe return

            var name = 'guest'
            var title = 'No Title'
            if(queryObject.name)
                name = queryObject.name
            if(queryObject.title)
                title = queryObject.title
            
            console.log('queryObject : ', queryObject);
            res.end(fs.readFileSync(__dirname + url));
        } else {
            console.log('method : ', method);
        }
    } else if ( req.url == '/login'){
        console.log('URL : ', url);
        url = '/login.html';
        res.end(fs.readFileSync(__dirname + url));
    } else {
        console.log('그리고 아무것도 일어나지 않았따-');
    }
    console.log('client 접속');
    
}).listen(8080);
console.log('Server starts. Port : 8080')
