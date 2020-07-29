//import exp from 'express'; //ES6식으로
var fs = require('fs');

var exp = require('express'); 
var app = exp();

var bodyParser = require('body-parser');

const userInfo = [
    {id : '인생', pw : '허무', name : '퇴사'},
    {id : '라면', pw : '짬뽕', name : '피자'},
    {id : '조이', pw : '유이', name : '루이'},
];

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.end(fs.readFileSync(__dirname + '/login.html'));
})


app.post('/index.html',function (req,res) {    
    var user = userInfo.find(el => el['id'] == req.body.id);
    console.log(user); // userInfo없음 undefined / userInfo있음 { id: '조이', pw: '유이', name: '루이' }
    
    if(user!==undefined){   

        fs.readFile(__dirname + '/index.html', 'UTF-8',
        function(err, data){
            var conv_data = data.replace(/#id#/g, user.id).replace(/#pw#/g, user.pw);
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
});
    

    
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});