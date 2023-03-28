
var i;
var j;
function calculate() 
{
    var num1=document.getElementById("num1");

    var num1s=num1.value;

    var num1b=parseInt(num1s);

    var num2=document.getElementById("num2");

    var num2s=num2.value;

    var num2b=parseInt(num2s);

    var num3t;

    var op=document.getElementById("operator");

    var ops=op.value; 
    switch(ops)

    {

    case "plus": num3t = num1b + num2b; document.getElementById("num3").value=num3t; break;

    case "sub": num3t = num1b - num2b; document.getElementById("num3").value=num3t; break;

    case "mul": num3t = num1b * num2b; document.getElementById("num3").value=num3t; break;

    case "div": num3t = num1b / num2b; document.getElementById("num3").value=num3t; break;

    } 
    const result = "Result:" + num3t;
    console.log(result);
    document.getElementById('num3').textContent = result;
    
}
