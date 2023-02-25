module.exports = {
    HTML:function(){
        return `

        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>Greeter</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                    width: 100%;
                    height: 100%;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;

                    padding-bottom: 20%;
                }
                .title{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 54px;
                    display: flex;
                    align-items: center;

                    color: #1D1617;

                    padding-top: 80%;
                }
                .subtitle{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 27px;

                    color: #7B6F72;

                    padding-bottom: 60%;
                }
                .button{
                    width: 315px;
                    height: 60px;

                    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
                    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
                    border-radius: 99px;

                    display:flex;
                    flex-direction: row;
                    align-items:center;
                    justify-content:center;

                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                    color: #FFFFFF;

                    text-decoration-line: none;
                }
            </style>
        </head>
        <body>
            <div class="wrapper">
                <div class="title">Muscle<br>Spoon</div>
                <div class="subtitle">Everybody Can Train</div>
                <a class="button" href="/auth/login">Get started</a>
            </div>
        </body>
        </html>

        `;
      }
}