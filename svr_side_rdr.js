var http = require('http');
var fs = require('fs');
var qs = require('querystring')
const paserurl = require('url');
//const { notEqual } = require('assert');
//const { isUndefined } = require('util');


const userInfo = [
    {id : '인생', pw : '허무', name : '퇴사'},
    {id : '라면', pw : '짬뽕', name : '피자'},
    {id : '조이', pw : '유이', name : '루이'},
];


const init_func = function (req, res) {
    const { headers, method, url } = req;
    const pathname = paserurl.parse(url, true).pathname;


    if(method == 'GET'){

        console.log('PATHNAME : ', pathname);

        if(pathname == '/'){     
            // localserver:8080/ → login.html로 직행
            res.end(fs.readFileSync(__dirname + url + 'login.html'));
        } else {
            console.log('그리고 아무것도 일어나지 않았따-');
        }
    } else if (method == 'POST'){       

        var cli_data = '';

        req.on('data', function(data){
            cli_data += data; //데이터가 잘려서 들어올 수 있다는 점.
            console.log('Data Event');
        });
        
        if (pathname == '/index.html') {
            req.on('end', function(data){

                console.log('End Event');
                    
                var post = qs.parse(cli_data);  
                var loginuser = userInfo.find(el => el['id'] == post.id);

                if(loginuser!==undefined){   

                    fs.readFile(__dirname + pathname, 'UTF-8',
                    function(err, data){
                        var conv_data = data.replace(/#id#/g, loginuser.id).replace(/#pw#/g, loginuser.pw);
                        res.writeHead(200, {'Content-Type' : 'text/html'});
                        res.write(conv_data);
                        res.end();
                        }
                    )                         
                    
                }else{
                    res.end(
                        `
                        <!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="utf-8">
                            <title>Error</title>
                          </head>
                          <body>
                            <h1> 당신은 멤버가 아니에요 </h1>
                            <p> 아님아님 </p>
                          </body>
                        </html> 
                        `
                    );
                }
                /*
                for (var index = 0; index < userInfo.length; index++) {
                    if(userInfo[index].id == obj_data['id'] ){
                        res.end(``)
                    };
                }    
                res.end(``)
                */    
            });
        } else {
            console.log('그리고 아무것도 일어나지 않았따-');
        }   
    }    
    console.log('client 접속');
    
}

http.createServer(init_func).listen(8080);
//const httpServer = http.createServer(init_func);
//httpServer.listen(8080);
console.log('Server starts. Port : 8080')
