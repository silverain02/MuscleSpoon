module.exports = {
    HTML:function(name,gender){
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
            <a href="/profile?userId=${queryData.userId}">Profile</a>
            <a href="/exercise?userId=${queryData.userId}">Exercise</a>
            <a href="/diet?userId=${queryData.userId}">Diet</a>
        </body>
        </html>
        `;
      }
}