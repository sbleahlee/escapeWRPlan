var http = require('http');
var fs = require('fs');
const paserurl = require('url');

http.createServer(function (req, res) {
    const { headers, method, url } = req;
    const pathname = paserurl.parse(url, true).pathname;


    if(method == 'GET'){

        console.log('PATHNAME : ', pathname);

        if(pathname == '/'){     

            res.end(fs.readFileSync(__dirname + url + 'input_index.html'));

        } 
        else if (pathname == '/index.html') 
        { 

            const queryObject = paserurl.parse(url, true).query; //parsing URL. object-tpe return

            var name = 'guest'
            var title = 'No Title'

            if(queryObject.name)
                name = queryObject.name
            if(queryObject.title)
                title = queryObject.title
            
            console.log('queryObject : ', queryObject);

            //res.end(fs.readFileSync(__dirname + pathname));
            fs.readFile(__dirname + pathname, 'UTF-8',
                function(err, data){
                    var conv_data = data.replace(/#name#/g, name).replace(/#title#/g, title);
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.write(conv_data);
                    res.end();
                }
            )

        } 
        else if ( req.url == '/login')
        {
            url = '/login.html';
            res.end(fs.readFileSync(__dirname + url));

        } else {
            console.log('그리고 아무것도 일어나지 않았따-');
        }
    } else if (method == 'POST'){

        var cli_data = '';

        req.on('data', function(data){
            cli_data += data;
        });

        req.on('end', function(){
            var post = qs.parse(cli_data);
            console.log(post);
        });
    }    
    console.log('client 접속');
    
}).listen(8080);
console.log('Server starts. Port : 8080')
