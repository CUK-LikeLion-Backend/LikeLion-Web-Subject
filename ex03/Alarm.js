function setAlarm() {
    var alarmTime = document.getElementById("alarmset").value;
  
    if (alarmTime === "") {
      alert("wrong input");
      return;
    }
  
      const alarmDate = new Date();
  
      const [hour, minute] = alarmTime.split(':');
      alarmDate.setHours(hour);
      alarmDate.setMinutes(minute);
  
      // 주기적으로 현재 시간을 확인하고 알람 시간이 되면 알람을 울리게 합니다.
      const intervalId = setInterval(() => {
        const timeDiff = alarmDate - Date.now();
        if (timeDiff <= 0) {
          clearInterval(intervalId);
          alert("at that time");
        }
      }, 1000); // 1초마다 확인하도록 설정합니다.
  }
  