function setAlarm() {
  var alarmTime = document.getElementById("alarm-time").value;

  if (alarmTime === "") {
    alert("알람 시간을 설정하세요.");
    return;
  }

    var message = document.getElementById("alarm-message");
    message.innerHTML = "알람이 설정되었습니다.  알람은 " + alarmTime + "에 울립니다.";
    
    const alarmDate = new Date();

      // 입력된 알람 시간을 Date 객체로 변환합니다.
      const [hour, minute] = alarmTime.split(':');
      alarmDate.setHours(hour);
      alarmDate.setMinutes(minute);

      // 현재 시간을 기준으로 알람 시간까지 남은 시간을 계산합니다.
      const timeToAlarm = alarmDate - new Date();

      if (timeToAlarm > 0) {
        setTimeout(() => {
          alert(`알람!`);
        }, timeToAlarm);
      }
   
 }
  