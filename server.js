const express = require('express');
let app = express();
let http = require('http').Server(app);

app.use(express.static(__dirname) );

let port=3000;
http.listen(port);

console.log("The server is up! Listening on 8080.");
