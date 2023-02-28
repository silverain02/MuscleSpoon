module.exports = {
    HTML:function(name,gender,age,height,weight,userId){
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <script src="https://kit.fontawesome.com/c50c4da782.js" crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Profile</title>
            <style>
                *{
                    box-sizing: border-box;
                    margin: 0px;
                }
                html, body{
                    width: 100%;
                    height: 100%;
                    padding: 0;
                }
                .wrapper{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                }
                .wrapper_header{
                    padding: 20px 30px 0px 30px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .small_but{
                    width: 40px;
                    height: 40px;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    background: #F7F8F8;
                    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
                    border-radius: 8px;
                    color: #1D1617;
                    text-decoration: none;
                }
                .title{
                    display: flex;
                    align-items: center;

                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                    color: #1D1617;
                }

                .wrapper_body{
                    padding: 30px 30px 30px 30px;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .user_profile{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }
                .profile_img{
                    width: 55px;
                    height: 55px;
                    background: #9DCEFF;
                    border-radius: 100%;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                .profile_info{
                    padding-left: 15px;
                    padding-right: 110px;
                }
                .info_name{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 21px;
                    color: #1D1617;
                }
                .info_id{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 18px;
                    color: #7B6F72;
                }
                .edit_but{
                    width: 83px;
                    height: 30px;
                    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
                    border-radius: 99px;
                    color: white;
                    border:none;
                }

                .user_info{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    padding-top: 15px;
                    padding-bottom: 60px;
                }
                .info{
                    width: 95px;
                    height: 65px;
                    background: #FFFFFF;
                    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
                    border-radius: 16px;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 9%;
                }
                .input_text{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 21px;
                    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    border: none;
                    outline: none;

                }
                .input_info{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 18px;
                    color: #7B6F72;

                }

                .weight{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    padding-bottom: 400px ;
                }
                .weight_input{
                    width: 260px;
                    height: 48px;
                    background: #F7F8F8;
                    border-radius: 14px;
                    border: none;
                    outline: none;

                }
                .weight_but{
                    width: 50px;
                    height: 48px;

                    background: linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%);
                    border-radius: 14px;
                    color: white;
                    border: none;
                    outline: none;

                }

                .logout{
                    width: 315px;
                    height: 60px;

                    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);

                    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
                    border-radius: 99px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    text-decoration: none;
                }

            </style>
        </head>
        <body>
            <div class="wrpper">
                <div class="wrapper_header">
                    <a href="javascript:window.history.back();" class="small_but">
                        <i class="fa-solid fa-chevron-left"></i>
                    </a>
                    <div class="title">Profile</div>
                    <div class="small_but">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div class="wrapper_body">
                    <div class="user_profile">
                        <div class="profile_img">
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div class="profile_info">
                            <div class="info_name">${name}</div>
                            <div class="info_id">${userId}</div>
                        </div>
                        <button class="edit_but" type="submit" onClick="update()">Edit</button>
                    </div>
                    <div class="user_info">
                        <div class="info">
                            <input class="input_text" type="text" id="height" value=${height}>
                            <div class="input_info">Height</div>
                        </div>
                        <div class="info">
                            <input class="input_text" type="text" id="age" value=${age}>
                            <div class="input_info">Age</div>
                        </div>
                        <div class="info">
                            <input class="input_text" type="text" value=${weight} disabled="true">
                            <div class="input_info">Weight</div>
                        </div>
                    </div>
                    <div class="weight">
                        <input class="weight_input" type="text" id="weight" placeholder="   몸무계 입력">
                        <button class="weight_but" type="submit" onClick="update()">KG</button>
                    </div>
                    <a class="logout" href="/auth/login">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Logout
                    </a>
                </div>
            </div>

            <input type="hidden" id="userId" value=${userId}>

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