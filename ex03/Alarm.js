// 알람 설정 버튼 클릭 시 이벤트 추가
document.getElementById("Setbutton").addEventListener("click", function() {
    // 입력받은 알람 시간 가져오기
    var alarmTime = document.getElementById("Alarmtime").value;
  
    // 현재 시간 가져오기
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // 알람 시간 분리하기
    var alarmHours = parseInt(alarmTime.split(":")[0]);
    var alarmMinutes = parseInt(alarmTime.split(":")[1]);
  
    // 알람 시간이 오늘이 아니면 내일 같은 시간에 울리도록 설정
    if (alarmHours < hours || (alarmHours == hours && alarmMinutes <= minutes)) {
      var tomorrow = new Date();
      tomorrow.setDate(now.getDate() + 1);
      var tomorrowStr = tomorrow.getFullYear() + "-" + (tomorrow.getMonth()+1).toString().padStart(2,'0') + "-" + tomorrow.getDate().toString().padStart(2,'0');
      alarmTime = tomorrowStr + "T" + alarmTime;
    } else {
      var todayStr = now.getFullYear() + "-" + (now.getMonth()+1).toString().padStart(2,'0') + "-" + now.getDate().toString().padStart(2,'0');
      alarmTime = todayStr + "T" + alarmTime;
    }
  
    // 알람 시간과 현재 시간 비교하여 알람 울리기
    var timeDiff = (new Date(alarmTime)) - now;
    if (timeDiff > 0) {
      setTimeout(function() {
        alert("알람 시간입니다. 일어나세요.");
      }, timeDiff);
      alert("알람이 설정되었습니다.");

    } else {
      alert("다시 시간을 설정하여 주세요.");
    }
  });
  