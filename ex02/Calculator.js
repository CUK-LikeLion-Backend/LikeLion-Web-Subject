function calculate() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    console.log(num1, num2, operator);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        default:
            result = "Invalid operator";
            break;
    }

    console.log(result);

    document.getElementById("result").innerHTML = result;
}

window.onload = function () {
    document.querySelector('input[type="button"]').onclick = calculate;
};
