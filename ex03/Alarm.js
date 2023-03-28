function SetAlarm(){
    let alarmTime = document.getElementById("time").value; //입력한 시간 값 가져오기
    let alarmhours = Number(alarmTime.split(":")[0]); //문자열 생성 / : 기준으로 인덱스 0, 1 ..
    let alarmmins = Number(alarmTime.split(":")[1]);

    let nowtimeInterval = setInterval(() => {

    let nowtime = new Date();   //현재시간 객체로 생성
    let hours = nowtime.getHours(); //현재 시간의 시
    let mins = nowtime.getMinutes(); // 현재 시간의 분

    if((alarmhours == hours)&&(alarmmins == mins)){
        alert("알람!");
        clearInterval(nowtimeInterval); //알람 울린 후 반복되지 않도록 setInterval 함수 중지
        
    }
    
    }, 1000);
    
}
//setInterval 안에 
