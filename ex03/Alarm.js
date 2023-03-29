const setTime = document.querySelector("#times");
let alarm;

function setalarm() { 
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const cur = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    if (cur == setTime.value) {
        alert("Wake up!");
        clearInterval(alarm);
    }
}

function init() {
    alarm = setInterval(setalarm, 1000);
}
