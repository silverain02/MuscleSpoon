module.exports = {
    HTML:function(name,gender,age,height,weight,userId){
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <title>Navigation</title>
        </head>
        <body>
            <div>이름 : ${name}</div>
            <div>성별 : ${gender}</div>
            <div>나이 : 
                <input type="text" id="age" value=${age}>
            </div>
            <div>키 :
                <input type="text" id="height" value=${height}>
            </div>
            <div>몸무계 : 
                <input type="text" id="weight" value=${weight}>
            </div>

            <input type="hidden" id="userId" value=${userId}>

            <button type="submit" onClick="update()">수정</button>

            <script>
            
            const userId = document.getElementById('userId').value;
            console.log(userId);

            function update() {
                const data = {
                    "age" : document.getElementById('age').value,
                    "height" : document.getElementById('height').value,
                    "weight" : document.getElementById('weight').value,
                    "userId" : document.getElementById('userId').value
                }
                console.log(data);

                axios.put('http://localhost:3000/profile/edit',JSON.stringify(data))
                .then((response) =>{
                    alert("수정완료")
                });
            }

            </script>
        
        </body>
        </html>
        `;
      }
}