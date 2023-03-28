function setAlarm(){
    const alarmTime = document.getElementById('alarmTime').value;
    const [hour, minute] = alarmTime.split(":");
    const now = new Date();
    const alarm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0);
    const timeUntilAlarm = alarm - now;
    
    if(timeUntilAlarm <= 0){
        alert("이미 지난 시간입니다.");
        return;
    }

    setTimeout(function(){
        alert('알람이 울립니다!');
    }, timeUntilAlarm);
} 
