var alarmTimeout;

function setAlarm() {

  var alarmTime = document.getElementById("alarm-time").value;

  var now = new Date();
  var alarmDate = new Date(now.toDateString() + " " + alarmTime);
  var timeUntilAlarm = alarmDate - now;

  
  if (timeUntilAlarm > 0) {
    alarmTimeout = setTimeout(playAlarm, timeUntilAlarm);
    document.getElementById("alarm-status-text").textContent = "Alarm set for " + alarmTime;
  } else {
    alert("Please select a time in the future.");
  }
}

function playAlarm() {
  
  clearTimeout(alarmTimeout);

  // 알람
  document.getElementById("alarm-status-text").textContent = "ALARM!";

  // 알람 울리면 바탕 빨간색으로 표시
  var body = document.querySelector("body");
  var isWhite = true;
  var flashInterval = setInterval(function() {
    if (isWhite) {
      body.style.backgroundColor = "red";
    } else {
      body.style.backgroundColor = "white";
    }
    isWhite = !isWhite;
  }, 500);

  // 10초 후에 알람 멈춤
  setTimeout(function() {
    clearInterval(flashInterval);
    body.style.backgroundColor = "white";
    document.getElementById("alarm-status-text").textContent = "Alarm is off";
  }, 10000);
}
