module.exports = {
    HTML:function(name,gender,age,height,weight){
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
            <div>나이 : ${age}</div>
            <div>키 : ${height}</div>
            <div>몸무계 : ${weight}</div>
        </body>
        </html>
        `;
      }
}