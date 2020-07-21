var http = require('http');
const paserurl = require('url');

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
            res.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset = "utf-8">
                        <title>My test page</title>
                    </meta>
                </head>

                <body>
                    <h1>Welcome! ${name}</h1>
                    <h1>Title : ${title}</h1>
                    
                    <img src="https://picsum.photos/400" alt = "Random Photo"></img>
                    <p>https://picsum.photos/400</p>

                    <ul><!-- List-->
                        <li>Technologists</li>                    
                        <li>nature</li>
                        <li>people</li>
                    </ul>
                    
                    <p>We are studying together.</p>
                </body>
            </html>
            `)
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
