module.exports = {
  HTML:function(breakfastList, lunchList, dinnerList){
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
        /* styling lable */
    .toggle {
        --width: 80px;
        --height: calc(var(--width) / 3);
    
        position: relative;
        display: inline-block;
        width: var(--width);
        height: var(--height);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
        border-radius: var(--height);
        cursor: pointer;
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
      </style>
    </head>
    <body>
      <div class="main_wrapper">
        <div class="date">
            <input type="date" id="date">
            <script>
                document.getElementById('date').value =
                new Date().toISOString().slice(0, 10);;
            </script>
        </div>
        <div class="toggle_wrapper">
            <label class="toggle">
                <input type="checkbox" onclick="location.href='/diet_week'">
                <span class="slider"></span>
                <span class="labels" data-on="DAY" data-off="WEEK"></span>
            </label>
        </div>
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
                ${dinnerList}
            </div>
        </div>
      </div>
      
      <script>
        // 식단 기록 db에 저장
        function postDiet(){
          const data = {
            "time": document.getElementById('part').value,
            "dietName": document.getElementById('dietName').value,
            "gram" : document.getElementById('gram').value,
            "date" : document.getElementById('date').value
          }

          if(data.time.trim().length === 0){
            alert('시간을 선택하세요.');
          return;
          }else if(data.date.trim().length === 0){
            alert('날짜를 선택하세요.');
          return;
          }else if(data.dietName.trim().length === 0){
            alert('음식명을 입력하세요.');
          return;
          }
        
          axios.post('http://localhost:3000/diet', JSON.stringify(data), { credential: true })
            .then((response) => {
              console.log(response);
              if (response.data === 2) {
                window.localStorage.setItem('Time', data.time);
                window.localStorage.setItem('DietName', data.dietName);
                window.localStorage.setItem('Gram', data.gram);
                alert('등록되었습니다.');
                location.href = '/diet';
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
            "time" : document.getElementById('time').value,
            "dietName": document.getElementById('dietName').value,
            "gram" : document.getElementById('gram').value,
            "date" : document.getElementById('date').value
          }
          axios.post('http://localhost:3000/diet/delete', JSON.stringify(data), { credential: true })
            .then((response) => {
              console.log(response);
              if (response.data === 1) {
                alert('삭제되었습니다.');
                location.href = '/diet';
              }
            });
        }
      </script>
    </body>
    </html>`;
  }, breakfastList:function(dietData){
    var breakfastList = '<ul>';
    var i = 0;
    while(i < dietData.length){
      if(dietData[i].userId === dietData.userId && dietData[i].time === '아침'){
        breakfastList = breakfastList + 
        `<li><input type="checkbox"> ${dietData[i].dietName} ${dietData[i].gram} 
          <button class="btn btn-delete" onclick="exerDelete()">
            <span class="mdi mdi-delete mdi-24px"></span>
            <span class="mdi mdi-delete-empty mdi-24px"></span>
            <span>Delete</span>
          </button>
        </li>`
      }
    }
    breakfastList = breakfastList+`</ul>`;
    return breakfastList;
  }, lunchList:function(dietData){
    var lunchList = '<ul>';
    var i = 0;
    while(i < dietData.length){
      if(dietData[i].userId === dietData.userId && dietData[i].time === '점심'){
        lunchList = lunchList + 
        `<li><input type="checkbox"> ${dietData[i].dietName} ${dietData[i].gram} 
          <button class="btn btn-delete" onclick="exerDelete()">
            <span class="mdi mdi-delete mdi-24px"></span>
            <span class="mdi mdi-delete-empty mdi-24px"></span>
            <span>Delete</span>
          </button>
        </li>`
      }
    }
    lunchList = lunchList+`</ul>`;
    return lunchList;
  }, dinnerList:function(dietData){
    var dinnerList = '<ul>';
    var i = 0;
    while(i < dietData.length){
      if(dietData[i].userId === dietData.userId && dietData[i].time === '저녁'){
        dinnerList = dinnerList + 
          `<li><input type="checkbox"> ${dietData[i].dietName} ${dietData[i].gram} 
            <button class="btn btn-delete" onclick="exerDelete()">
              <span class="mdi mdi-delete mdi-24px"></span>
              <span class="mdi mdi-delete-empty mdi-24px"></span>
              <span>Delete</span>
            </button>
          </li>`
      }
    }
    dinnerList = dinnerList+`</ul>`;
    return dinnerList;
  }
}