function calculate() {
	var a = parseInt(document.getElementById('a').value);  //문자열을 숫자로 추출 /  
	var b = parseInt(document.getElementById('b').value);
    var operator = document.getElementById('operator').value; //선택된 연산자의 값 추출

// function plus() {
// 	setValue();
// 	// var result = a+b;
//     document.getElementById("result").value = a+b;
// }

    var result;
    switch(operator){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            result = "올바른 연산자가 아님.";
            break;
    }

    document.getElementById("result").value = result;  //result의 값에 계산 결과 저장하여 출력되게함
}
