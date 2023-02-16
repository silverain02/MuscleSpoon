//import modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');

//임시 DB
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'dpapfkfem12@',  //fill in yours
    database : 'muscleSpoon'   //need to fill in
})
db.connect();

//application
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){

        //main페이지
        response.writeHead(200);
        response.end('This is main');
        
    }else if(pathname === '/navigation'){

        //navigation페이지

        //Read
        db.query(`SELECT name,gender FROM user WHERE userId=?`,[queryData.userId], function(error,userData){
            if(error){
                throw error;
            }
            var name = userData[0].name;
            var gender = userData[0].gender;
            
            var template_navigation = `
                <!DOCTYPE html>
                <html lang="ko">
                <head>
                    <meta charset="UTF-8">
                    <title>Navigation</title>
                </head>
                <body>
                    <div>이름 : ${name}</div>
                    <div>성별 : ${gender}</div>
                    <a href="/profile?userId=${queryData.userId}">Profile</a>
                    <a href="/exercise?userId=${queryData.userId}">Exercise</a>
                    <a href="/diet?userId=${queryData.userId}">Diet</a>
                </body>
                </html>
            `;
            response.writeHead(200);
            response.end(template_navigation);
        });

    }else if(pathname === '/auth/join'){

        //회원가입페이지
        response.writeHead(200);
        response.end('This is join');

    }else if(pathname === '/auth/login'){

        //로그인페이지
        response.writeHead(200);
        response.end('This is login');
        
    }else if(pathname === '/profile'){

        //프로필페이지
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
        
    }else {
        response.writeHead(404);
        response.end('Not found');
    }

});

app.listen(3000);