function calculate(num1, num2, operator) {
    let result = 0;
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    }
  
    return result;
  }
  
  function showResult() {
    var num1 = Number(document.getElementById("first_number").value);
    var num2 = Number(document.getElementById("second_number").value);
    const operator = document.getElementById("operator").value;
  
    const result = calculate(num1, num2, operator);
  
    // 결과를 보여주는 div 태그에 대한 참조를 추가
    document.getElementById("result").textContent = result;
  }