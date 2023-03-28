function calculate() {

    var input1 = Number(document.getElementById("input1").value);
    var input2 = Number(document.getElementById("input2").value);
    var operator = document.getElementById("operator").value;
  

    var result;
    switch(operator) {
      case "+":
        result = input1 + input2;
        break;
      case "-":
        result = input1 - input2;
        break;
      case "*":
        result = input1 * input2;
        break;
      case "/":
        result = input1 / input2;
        break;
      default:
        result = "Invalid operator";
    }
  
   
    document.getElementById("result").value = result;
  }
  