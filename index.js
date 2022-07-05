const calculator = {
 number1:+prompt("Enter number [1] :"),
 change :prompt("Enter (+ - * / )"),
number2:+prompt("Enter number[2]"),
Result:0,

theend : function()
{
switch(calculator["change"])
{
    case "+":
    {
calculator["Result"]=calculator["number1"] + calculator["number2"];
break;
    }
    case "-":
        {
            calculator["Result"]=calculator["number1"] - calculator["number2"];
            break;
        }
        case "*":
            {
                calculator["Result"]=calculator["number1"] * calculator["number2"];
                break;
            }
            case "/":
                {
                    calculator["Result"]=calculator["number1"] / calculator["number2"];
                }
}
}
};
calculator["theend"]();
console.log("NUMBER [1] =",calculator["number1"]);
console.log(calculator["change"]);
console.log("NUMBER [2] =",calculator["number2"]);
console.log("RESULT IS =",calculator["Result"]);
