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
    user: 'root',
    password : 'dpapfkfem12@',  //fill in yours
    database : 'muscleSpoon'   //need to fill in
})
db.connect();

//프론트 페이지 끌어오기
var template_greeter = require('./lib/greeter.js');
var template_navigation = require('./lib/navigation.js');
var template_profile = require('./lib/profile.js');
// var template_login = require('./lib/login.js');

//application
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var method = request.method;

    if(pathname === '/'){
        var html = template_greeter.HTML();

        //main페이지
        response.writeHead(200);
        response.end(html);
        
    }else if(pathname === '/navigation'){

        //navigation페이지

        //Read
        db.query(`SELECT name,gender,weight FROM user WHERE userId=?`,[queryData.userId], function(error,userData){
            if(error){
                throw error;
            }
            var name = userData[0].name;
            var gender = userData[0].gender;

            var html = template_navigation.HTML(name,gender,queryData.userId);
            
            response.writeHead(200);
            response.end(html);
        });

    }else if(pathname === '/auth/join' && method === 'GET'){

        //회원가입페이지
        fs.readFile('./lib/join.html', function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            }
        });

    } else if (pathname === '/auth/join' && method === 'POST') {
        //회원정보 db에 넣기
    const joinBody = [];
    
    request.on('data', (data) => {
        joinBody.push(data);
    })

    request.on('end', () => {
        const parsedBody = Buffer.concat(joinBody).toString();

        let id = parsedBody.split("\"")[3];
        let pw = parsedBody.split("\"")[7];
        let name = parsedBody.split("\"")[11];
        let gender = parsedBody.split("\"")[15];
        let age = parsedBody.split("\"")[19];
        let height = parsedBody.split("\"")[23];
        let weight = parsedBody.split("\"")[27];

        sql = "INSERT INTO user (id, userID, password, name, gender, age, height, weight) VALUES ?";
        var values = [
            [null, id, pw, name, gender, age, height, weight]
        ];
        db.query(sql, [values], function (err, result) {
            if (err) throw err;
            response.writeHead(200);
            return response.end('1');
        });
    })
    } else if (pathname === '/auth/findId') {
        //아이디 중복 조회
        const findIdBody = [];

        request.on('data', (data) => {
            findIdBody.push(data);
        })

        request.on('end', () => {
            const parsedBody = Buffer.concat(findIdBody).toString();
            var id = parsedBody.split("\"")[3]

        sql = `SELECT userId FROM user WHERE userId=?`;
            
        db.query(sql, [id], function (err, result) {
            if (err) throw err;

            //아이디가 존재하지 않으면
            if (result[0] === undefined) {
                response.writeHead(200);
                return response.end('0');
            }
            //아이디가 존재하면
            else {
                response.writeHead(200);
                return response.end('1');
            }
        });
    })
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
        //Read
        db.query(`SELECT * FROM user WHERE userId=?`,[queryData.userId], function(error,userData){
            if(error){
                throw error;
            }
            var name = userData[0].name;
            var gender = userData[0].gender;
            var age = userData[0].age;
            var height = userData[0].height;
            var weight = userData[0].weight;

            var html = template_profile.HTML(name,gender,age,height,weight,queryData.userId);
            
            response.writeHead(200);
            response.end(html);
        });
        
    }else if(pathname === '/profile/edit'){
        //회원정보 수정

        //수정정보
        const _data = [];

        request.on('data', (data) => {
            _data.push(data);
        })
        request.on('end', () => {
            const parsedBody = Buffer.concat(_data).toString();

            var age = parsedBody.split("\"")[3];
            var height = parsedBody.split("\"")[7];
            var weight = parsedBody.split("\"")[11];
            var userId = parsedBody.split("\"")[15];

            db.query(`UPDATE user SET age = ${age}, height = ${height}, weight = ${weight} WHERE userId=?`,userId, function(error,result){
                if(error){
                    throw error;
                }
                response.writeHead(204);
                response.end();
            });
        })


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