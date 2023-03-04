module.exports = {
    HTML:function(list, userId){
      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercise</title>
        
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
  
      .part_wrapper{
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
  
      .exerName{
        height: 40px;
        width: 315px;
        left: 37px;
        top: 192px;
        border-radius: 16px;
        margin-bottom:5px;
        box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
      }
  
      .setNum{
        height: 40px;
        width: 315px;
        left: 37px;
        top: 241px;
        border-radius: 16px;
        margin-bottom:5px;
        box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
      }
      
      #exerName, #setNum{
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
  
      label[for=part],[for=exerName],[for=setNum]{
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
  
      .checklist_wrapper{
        display: flex;
        flex-direction: column;
        height: 408px;
        width: 315px;
        left: 37px;
        top: 339px;
        border-radius: 16px;
  
        overflow: scroll outo;
        white-space: nowrap;
  
        background-color: #fff;
        box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
      }
  
      .checklist_wrapper li{
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
  
      #box{
        float:left;
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
  
      .btn-delete span#delete{
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
                    <input type="checkbox" onclick="location.href='/exercise'">
                    <span class="slider"></span>
                    <span class="labels" data-on="DAY" data-off="WEEK"></span>
                </label>
            </div>
          </header>
          
          <div class="select_wrapper">
            <div class="part_wrapper">
                <label for="part">부위</label>
                <select name="part" id="part">
                    <option value="가슴">가슴</option>
                    <option value="등">등</option>
                    <option value="어깨">어깨</option>
                    <option value="하체">하체</option>
                    <option value="팔">팔</option>
                </select>
            </div>
            <div class="exerName">
                <label for="exerName">운동명</label>
                <input type="text" id="exerName" placeholder="운동명을 입력하세요.">
            </div>
            <div class="setNum">
                <label for="setNum">세트수</label>
                <input type="number" id="setNum" placeholder="세트수를 입력하세요.">
            </div>
            <input type="hidden" id="userId" value=${userId}>
          </div>
  
          <div>
              <button type="submit" class="registration" onClick="postExer()">등록</button>
          </div>
  
          <main class="checklist_wrapper">
              <h3>CHECK LIST</h3>
                ${list}
          </main>
        </div>
        
        <script>
          // 운동 기록 db에 저장
          function postExer(){
            const data = {
              "part": document.getElementById('part').value,
              "exerName": document.getElementById('exerName').value,
              "setNum" : document.getElementById('setNum').value,
              "date" : document.getElementById('date').value,
              "userId" : document.getElementById('userId').value
            }
  
            if(data.part.trim().length === 0){
              alert('운동할 부위를 선택하세요.');
            return;
            }else if(data.exerName.trim().length === 0){
              alert('운동명을 입력하세요.');
            return;
            }else if(data.setNum.trim().length === 0){
              alert('세트수를 입력하세요.');
            return;
            }else if(data.date.trim().length === 0){
              alert('날짜를 선택하세요.');
            return;
            }
          
            axios.post('http://localhost:3000/exercise_day', JSON.stringify(data), { credential: true })
              .then((response) => {
                console.log(response);
                if (response.data === 2) {
                  alert('등록되었습니다.');
                  location.href = '/exercise_day?userId=${userId}';
                }else if (response.data === 1){
                  alert('이미 등록된 정보입니다.')
                }else {
                  alert('등록 정보를 정확히 입력해주세요.');
                }
              });
          }
        
          // 체크한 목표 저장
          function is_checked(box) { //cheak 되면 데이터베이스 변경
            if(box.checked){
              var checked = '1';
            }else{
              var checked = '0';
            }
  
            const data = {
              "checked": checked,
              "id" : document.getElementById('id').value
            }
  
            axios.post('http://localhost:3000/exercise/check', JSON.stringify(data), { credential: true })
            .then((response) => {
              console.log(response);
              if (response.data === 1) { 
                console.log('success');
              }
            });
          }
        
          // 운동 기록 삭제
          function exerDelete(){
            const data = {
              "id" : document.getElementById('id').value
            }
            console.log(id);
            axios.post('http://localhost:3000/exercise/delete', JSON.stringify(data), { credential: true })
              .then((response) => {
                console.log(response);
                if (response.data === 1) {
                  alert('삭제되었습니다.');
                  location.href = '/exercise_day?userId=${userId}';
                }
              });
          }
        
        </script>
      </body>
      </html>`;
    }, list:function(exerData, queryDataUserId){
      var list = '<ol>';
      var i = 0;
      while(i < exerData.length){
        if(exerData[i].userId === queryDataUserId){
          list = list + 
          `<li><input type="hidden" id="id" value=${exerData[i].id}>`
           if(exerData[i].checkYn === 1){
            list = list + `<input type="checkbox" id="box" onclick="is_checked(this)" checked> ${exerData[i].part} ${exerData[i].exerName} ${exerData[i].setNum}세트`           
           }else{
            list = list + `<input type="checkbox" id="box" onclick="is_checked(this)"> ${exerData[i].part} ${exerData[i].exerName} ${exerData[i].setNum}세트`
           }
          list = list +
           `<button class="btn btn-delete" onclick="exerDelete()">
             <span class="mdi mdi-delete mdi-24px"></span>
             <span class="mdi mdi-delete-empty mdi-24px"></span>
             <span id="delete">삭제</span>
           </button>
          </li>`
        }
        i++;
      }
      list = list+`</ol>`;
      return list;
    }
  }