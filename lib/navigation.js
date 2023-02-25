module.exports = {
    HTML:function(name,gender,userId){
        return `

    <!DOCTYPE html>
    <html lang="ko">
    <head>
    <meta charset="UTF-8">
    <script src="https://kit.fontawesome.com/c50c4da782.js" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation</title>
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

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            padding: 50px 50px 40px 50px;
        }
        .greeting{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;   
            color: #1D1617;
        }
        .profile{
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
        }
        .wrapper_body{
            gap: 40px;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .fitness{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            width: 315px;
            height: 132px;
            background: linear-gradient(274.42deg, rgba(146, 163, 253, 0.2), rgba(157, 206, 255, 0.2));
            border-radius: 20px;

            padding-top: 20px;
            padding-right: 20px;
        }
        .fitness_info{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-left: 20px;
        }
        .info_title{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            color: #1D1617;
        }
        .info_subtitle{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            color: #7B6F72;

            padding-bottom: 15px;
        }
        .fitness_but{
            width: 94px;
            height: 35px;
            background: #FFFFFF;
            border-radius: 50px;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 15px;

            color: rgba(146, 163, 253, 1);
            text-decoration: none;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .img{
            width: 92px;
            height: 92px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 100%;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .fitness_img{
            width: 73px;
            height: 90px;
        }

        .meal{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            width: 315px;
            height: 132px;
            background: linear-gradient(274.42deg, rgba(146, 163, 253, 1), rgba(157, 206, 255, 1));
            box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
            border-radius: 20px;

            padding-top: 20px;
            padding-right: 20px;
        }
        .meal_info{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-left: 20px;
        }
        .meal_but{
            width: 94px;
            height: 35px;
            background: #FFFFFF;
            border-radius: 50px;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 15px;

            color: rgba(146, 163, 253, 1);
            text-decoration: none;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .meal_img{
            width: 57px;
            height: 41px;
        }
        .weight{
            width: 315px;
            height: 57px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            padding-left: 20px;
            padding-right: 20px;
            background: linear-gradient(274.42deg, rgba(146, 163, 253, 0.2), rgba(157, 206, 255, 0.2));
            border-radius: 16px;
        }
        .edit_but{
            width: 83px;
            height: 30px;
            background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
            border-radius: 99px;

            display: flex;
            justify-content: center;
            align-items: center;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 15px;
            text-decoration: none;
            color: white;
        }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="wrapper_header">
                <div class="greeting">운동하러 가볼까요?<br>${name}님</div>
                <a class="profile" href="/profile?userId=${userId}">
                    <i class="fa-regular fa-user"></i>
                </a>
            </div>
            <div class="wrapper_body">
                <div class="fitness">
                    <div class="fitness_info">
                        <div class="info_title">운동 기록</div>
                        <div class="info_subtitle">오늘의 운동을 기록하세요!</div>
                        <a class="fitness_but" href="/exercise?userId=${userId}">go Fitness</a>
                    </div>
                    <div class="img">
                        <img src="/picture?img=female_fitness.png" class="fitness_img">
                    </div>
                    
                </div>
                <div class="meal">
                    <div class="meal_info">
                        <div class="info_title">식단 기록</div>
                        <div class="info_subtitle">오늘의 식단을 기록하세요!</div>
                        <a class="meal_but" href="/diet?userId=${userId}">go Meal</a>
                    </div>
                    <div class="img">
                        <img src="/picture?img=salad.png" class="meal_img">
                    </div>
                </div>
                <div class="weight">
                    <div class="info_title">몸무계 기록</div>
                    <a class="edit_but" href="/profile?userId=${userId}">Edit</a>
                </div>
            </div>
        </div>

    </body>
    </html>

        `;
      }
}