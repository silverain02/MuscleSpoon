//import modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');

//프론트 페이지 위치
var template = require('./lib/template.js');

//connect DB
/*
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',  //fill in yours
    database : ''   //need to fill in
})
db.connect()
*/

//application
var app = http.createServer(function(request,response){
    var _url = request.url;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){

        //main페이지
        response.writeHead(200);
        response.end('This is main');
        
    }else if(pathname === '/navigation'){

        //navigation페이지
        response.writeHead(200);
        response.end('This is navigation');

    }else if(pathname === '/auth/join'){

        //회원가입페이지
        response.writeHead(200);
        response.end('This is join');

    }else if(pathname === '/auth/login'){

        //로그인페이지
        response.writeHead(200);
        response.end('This is login');
        
    }else if(pathname === '/profile'){

        //회원가입페이지
        response.writeHead(200);
        response.end('This is profile');
        
    }else if(pathname === '/exercise'){

        //운동기록
        response.writeHead(200);
        response.end('This is exercise');
        
    }else if(pathname === '/diet'){

        //식단기록
        response.writeHead(200);
        response.end('This is diet');
        
    }

});

app.listen(3000);