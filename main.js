//import modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');
var mysql2 = require('mysql2');

//임시 DB
var db = mysql2.createConnection({
    host     : 'localhost',
    user: 'root',
    port: '3305',
    password : 'goqlsdk1!!',  //fill in yours
    database : 'musclespoon'   //need to fill in
})
db.connect();

//프론트 페이지 끌어오기
var template_navigation = require('./lib/navigation.js');
// var template_login = require('./lib/login.js');



//application
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var method = request.method;
    console.log(method);

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

            var html = template_navigation.HTML(name,gender);
            
            response.writeHead(200);
            response.end(template_navigation);
        });

    }else if(pathname === '/auth/join'){

        //회원가입페이지
        response.writeHead(200);
        response.end('This is join');

    }
    
    else if (pathname === '/auth/login' && method === 'GET') {

        //로그인 페이지
        fs.readFile('./lib/login.html', function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            }
        });
        
    } else if (pathname === '/auth/login' && method === 'POST') {
        //로그인 정보 db 조회
        const loginBody = [];
            
        request.on('data', (data) => {
        loginBody.push(data);
        })

        request.on('end', () => {
        const parsedBody = Buffer.concat(loginBody).toString();

        let id = parsedBody.split("\"")[3];
        let pw = parsedBody.split("\"")[7];

        //아이디와 비밀번호 모두 일치하는지 확인
        sql = "SELECT userId FROM user WHERE userId=? AND password=?";
        
        db.query(sql, [id, pw], function (err, result) {
            if (err) throw err;

            //일치하지 않음
            if (result[0] === undefined) {

            //아이디만 일치하는지 확인
            sql = "SELECT userId FROM user WHERE userId=?";
        
            db.query(sql, [id], function (err, result) {
                if (err) throw err;

                //유저 정보가 존재하지 않을 때 0반환
                if (result[0] === undefined) {
                response.writeHead(200);
                return response.end('0');
                }

                //비밀번호가 틀렸을 때 1반환
                else {
                response.writeHead(200);
                return response.end('1');
                }
            });
            }
            //로그인 성공 시 2반환
            else {
                response.writeHead(200);
                return response.end('2');
            }
        });
    })
    }
    
    else if (pathname === '/profile') {

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