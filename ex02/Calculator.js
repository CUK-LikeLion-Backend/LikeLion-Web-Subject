function Calculate() {
    var first = Number(document.getElementById('first').value);
    var second = Number(document.getElementById('second').value);
    const op = document.getElementById('op').value;
    var result;
    if (op == 0) //곱하기
        result = first * second;
    else if (op == 1) //더하기
        result = first + second;
    else if (op == 2)
        result = first - second;
    else
        result = first / second;
    
    const text = "Result:" + result;
    console.log(text);
    document.getElementById('result').textContent = text;
}