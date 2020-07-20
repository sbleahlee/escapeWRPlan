var http = require('http');
//create a server object
http.createServer(function (req, res) {
    console.log('client접속');

    res.write(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset = "utf-8">
    <title>My test page</title>
    </head>

    <body>
    <h1>Random Photo from picsum</h1>
    <img src = "https://picsum.photos/400" alt = "The Firefox logo : a flaming fox surrounding the Earth.">
    <p>https://picsum.photos/400</p>
    <ul> <!--changed to list in the tutorial -->
        <li>technologists</li>
        <li>nautre</li>
        <li>people</li>
    </ul>
    <p>Let's study together...</p>
    </body>
    <html>
    `); //write a response to the client

    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080