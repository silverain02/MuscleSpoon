module.exports = {
    HTML:function(breakfastList, lunchList, dinnerList, userId){
      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Diet</title>
        <style>
      .main_wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
  
        margin: 40px 0;
        width: 390px
        height: 844px;
        border-radius: 40px;
      }
  
      header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /* display: inline; */
        
        width: 100%;
        margin: 30px 0;
      }
  
      .date{
        line-height: 30px;
        background: #ebeefc;
        border-radius: 30px;
        padding: 5px;
        
        box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
        color: black;
      }
  
      #date{
        border:none;
  
        background:#ebeefc;
        font-family: Poppins;
        font-size: 15px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
      }
  
      /*toggle button*/
          /* styling lable */
      .toggle {
          --width: 80px;
          --height: calc(var(--width) / 3);
      
          position: relative;
          display: inline-block;
          width: 80px;
          height: 31px;
          box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
          border-radius: 30px;
          cursor: pointer;
          margin-left:30px
      }
  
      /* hiding checkbox */
      .toggle input {
          display: none;
      }
      /* Creating slider */
      .toggle .slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: var(--height);
          background-color: #ccc;
          transition: all 0.4s ease-in-out;
      }
      .toggle .slider::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: calc(var(--height));
          height: calc(var(--height));
          border-radius: calc(var(--height) / 2);
          background-color: #fff;
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease-in-out;
      }
      /* Adding slider effect */
      .toggle input:checked + .slider {
          background-color: #2196F3;
      }
      .toggle input:checked + .slider::before {
          transform: translateX(calc(var(--width) - var(--height)));
      }
      .toggle .labels {
            position: absolute;
            top: 8px;
            left: 0;
            width: 100%;
            height: 100%;
            font-size: 12px;
            font-family: sans-serif;
            transition: all 0.4s ease-in-out;
          }
        
      .toggle .labels::after {
            content: attr(data-off);
            position: absolute;
            right: 5px;
            color: #4d4d4d;
            opacity: 1;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
            transition: all 0.4s ease-in-out;
          }
        
      .toggle .labels::before {
            content: attr(data-on);
            position: absolute;
            left: 5px;
            color: #ffffff;
            opacity: 0;
            text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
            transition: all 0.4s ease-in-out;
          }
        
      .toggle input:checked~.labels::after {
            opacity: 0;
          }
        
      .toggle input:checked~.labels::before {
            opacity: 1;
          }
  
      .select_wrapper{
        width: 315px;
        height: 140px;
        top: 143px;
        border-radius: 16px;
      }
  
      .time_wrapper{
        height: 40px;
        width: 315px;
        left: 37px;
        top: 143px;
        border-radius: 16px;
        margin-bottom:5px;
        box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
      }
  
      select{
        height: Hug(228px);
        width: 200px;
        left: 103px;
        top: 176px;
        border:none;
        border-radius:0;
  
        font-family: Nunito;
        font-size: 15px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
      }
  
      option{
        height: 44px;
        width: 200px;
        left: 4px;
        top: 4px;
        border-radius: 8px;
        padding: 8px 12px 8px 12px;
      }
  
      .dietName, .gram{
        height: 40px;
        width: 315px;
        left: 37px;
        top: 192px;
        border-radius: 16px;
        margin-bottom:5px;
        box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
      }
      
      #dietName, #gram{
        height: 16px;
        width: 170px;
        left: 118px;
        top: 260px;
        border-radius: nullpx;
        border:none;
  
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
  
      }
  
      label[for=time],[for=dietName],[for=gram]{
        height: 15px;
        width: 45px;
        left: 57px;
        border-radius: nullpx;
        margin:10px;
  
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
  
        color: #1D1617;
      }
  
      .registration{
        height: 40px;
        width: 80px;
        left: 156px;
        top: 290px;
        border-radius: 99px;
        margin-bottom:5px;
        justify: space-between;
        background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
        box-shadow: 0px 10px 22px 0px #95ADFE4D;
  
        font-family: Poppins;
        font-size: 16px;
  
        color: white;
        background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
      }
  
      .breakfast, .lunch, .dinner{
        display: flex;
        flex-direction: column;
        height: 150px;
        width: 315px;
        left: 37px;
        top: 339px;
        border-radius: 16px;
        margin-bottom:5px;
  
        overflow: scroll outo;
        white-space: nowrap;
  
        background-color: #fff;
        box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
      }
  
      li{
        margin-bottom:5px;
      }
  
      h3{
        text-align:center;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
  
        color: #1D1617;
      }
  
      ol{
        padding-left:20px;
      }
  
      ol li{
        list-style: none;
      }
  
      .btn-delete {
        float:right;
        height: 21px;
        width: 45px;
        left: 281px;
        top: 440px;
        border-radius: 8px;
        background: #2678F3;
        color:white;
        margin-right:20px;
      }
  
      .btn-delete span#id="deleteBreakfast", .btn-delete span#id="deleteLunch", .btn-delete span#id="deleteDinner"{
        display: flex;
        align-items;
        text-align: center;
        justify-content: center;
        top: 440px;
        width:40px;
      } 
        </style>
      </head>
      <body>
        <div class="main_wrapper">
          <header>
            <div class="date">
                <input type="date" id="date">
                <script>
                    document.getElementById('date').value =
                    new Date().toISOString().slice(0, 10);;
                </script>
            </div>
            <div class="toggle_wrapper">
                <label class="toggle">
                    <input type="checkbox" onclick="location.href='/diet'">
                    <span class="slider"></span>
                    <span class="labels" data-on="DAY" data-off="WEEK"></span>
                </label>
            </div>
          </header>
  
          <div class="select_wrapper">
            <div class="time_wrapper">
                <label for="time">시간</label>
                <select name="time" id="time">
                    <option value="breakfast">아침</option>
                    <option value="lunch">점심</option>
                    <option value="dinner">저녁</option>
                </select>
            </div>
            <div class="dietName">
                <label for="dietName">음식명</label>
                <input type="text" id="dietName" placeholder="음식명을 입력하세요.">
            </div>
            <div class="gram">
                <label for="gram">그램수</label>
                <input type="number" id="gram" placeholder="그램수를 입력하세요.">
            </div>
            <input type="hidden" id="userId" value=${userId}>
          </div>
  
          <div>
              <button type="submit" class="registration" onClick="postDiet()">등록</button>
          </div>
  
          <div class="dietlist_wrapper">
              <div class="breakfast">
                  <h3>아침</h3>
                  ${breakfastList}
              </div>
              <div class="lunch">
                  <h3>점심</h3>
                  ${lunchList}
              </div>
              <div class="dinner">
                  <h3>저녁</h3>
                  ${dinnerList}
              </div>
          </div>
        </div>
        
        <script>
          // 식단 기록 db에 저장
          function postDiet(){
            const data = {
              "time": document.getElementById('time').value,
              "dietName": document.getElementById('dietName').value,
              "gram" : document.getElementById('gram').value,
              "date" : document.getElementById('date').value,
              "userId" : document.getElementById('userId').value
            }
  
            if(data.date.trim().length === 0){
              alert('날짜를 선택하세요.');
            return;
            }else if(data.time.trim().length === 0){
              alert('시간을 선택하세요.');
            return;
            }else if(data.dietName.trim().length === 0){
              alert('음식명을 입력하세요.');
            return;
            }
          
            axios.post('http://localhost:3000/diet_day', JSON.stringify(data), { credential: true })
              .then((response) => {
                console.log(response);
                if (response.data === 2) {
                  alert('등록되었습니다.');
                  location.href = '/diet_day?userId=${userId}';
                }else if (response.data === 1){
                  alert('이미 등록된 정보입니다.')
                }else {
                  alert('등록 정보를 정확히 입력해주세요.');
                }
              });
          }
  
          // 식단 기록 삭제
          function dietDelete(){
            const data = {
              "id" : document.getElementById('id').value
            }
            axios.post('http://localhost:3000/diet/delete', JSON.stringify(data), { credential: true })
              .then((response) => {
                console.log(response);
                if (response.data === 1) {
                  alert('삭제되었습니다.');
                  location.href = '/diet_day?userId=${userId}';
                }
              });
          }
        </script>
      </body>
      </html>`;
    }, breakfastList:function(dietData, queryDataUserId){
      var breakfastList = '<ol>';
      var i = 0;
      while(i < dietData.length){
        if(dietData[i].userId === queryDataUserId && dietData[i].time === 'breakfast'){
          breakfastList = breakfastList + `<li> ${dietData[i].dietName}`
          if(dietData[i].gram === 0){}
          else{breakfastList = breakfastList +`${dietData[i].gram}g`}
          breakfastList = breakfastList +
            `<input type="hidden" id="id" value=${dietData[i].id}>
              <button class="btn btn-delete" onclick="dietDelete()">
                <span class="mdi mdi-delete mdi-24px"></span>
                <span class="mdi mdi-delete-empty mdi-24px"></span>
                <span id="deleteLunch">삭제</span>
              </button>
            </li>`
        }
        i++;
      }
      breakfastList = breakfastList+`</ol>`;
      return breakfastList;
    }, lunchList:function(dietData, queryDataUserId){
      var lunchList = '<ol>';
      var i = 0;
      while(i < dietData.length){
        if(dietData[i].userId === queryDataUserId && dietData[i].time === 'lunch'){
          lunchList = lunchList + `<li> ${dietData[i].dietName}`
          if(dietData[i].gram === 0){}
          else{lunchList = lunchList +`${dietData[i].gram}g`}
          lunchList = lunchList +
            `<input type="hidden" id="id" value=${dietData[i].id}>
              <button class="btn btn-delete" onclick="dietDelete()">
                <span class="mdi mdi-delete mdi-24px"></span>
                <span class="mdi mdi-delete-empty mdi-24px"></span>
                <span id="deleteLunch">삭제</span>
              </button>
            </li>`
        }
        i++;
      }
      lunchList = lunchList+`</ol>`;
      return lunchList;
    }, dinnerList:function(dietData, queryDataUserId){
      var dinnerList = '<ol>';
      var i = 0;
      while(i < dietData.length){
        if(dietData[i].userId === queryDataUserId && dietData[i].time === 'dinner'){
          dinnerList = dinnerList + `<li> ${dietData[i].dietName}`
          if(dietData[i].gram === 0){}
          else{dinnerList = dinnerList +`${dietData[i].gram}g`}
          dinnerList = dinnerList +
            `<input type="hidden" id="id" value=${dietData[i].id}>
              <button class="btn btn-delete" onclick="dietDelete()">
                <span class="mdi mdi-delete mdi-24px"></span>
                <span class="mdi mdi-delete-empty mdi-24px"></span>
                <span id="deleteLunch">삭제</span>
              </button>
            </li>`
        }
        i++;
      }
      dinnerList = dinnerList+`</ol>`;
      return dinnerList;
    }
  }