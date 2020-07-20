var http = require('http'); //create a server object

http.createServer(function (req, res) {
    console.log('why it is printed twice on console?');
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
//printed only once on Firefox
//Firefox : log prints ToString expression
//          dir prints searchable Tree
//printed twice on Chrome
//Chrome : log prints Tree mostly