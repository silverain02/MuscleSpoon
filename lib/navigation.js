module.exports = {
    HTML:function(name,gender,userId){
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>Navigation</title>
        </head>
        <body>
            <div>이름 : ${name}</div>
            <div>성별 : ${gender}</div>
            <a href="/profile?userId=${userId}">Profile</a>
            <a href="/exercise?userId=${userId}">Exercise</a>
            <a href="/diet?userId=${userId}">Diet</a>
        </body>
        </html>
        `;
    }
}