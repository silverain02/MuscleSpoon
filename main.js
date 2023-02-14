//import modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');

//connect DB
/*
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'dpapfkfem12@',  //change into yours
    database : ''               //need to fill in
})
db.connect()
*/

//application sample
var app = http.createServer(function(request,response){
    var _url = request.url;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
        response.writeHead(200);
        response.end('Hello World');
    }
});

app.listen(3000);