

//oop funtion ...

function Addition(No1 : number,No2 : number) : number

{
    var Ans : number = 0;
    Ans = No1 + No2;
    return 0;


}
function Substration (No1 : number ,No2 : number) : number
{
    var Ans : number = 0;
    Ans = No1 -No2;
    return 0;

}
var Value1 : number = 11;
var Value2 : number = 10;
var Result : number = 0;

Result = Addition(Value1,Value2);
console.log("Addition is : "+Result);

Result = Substration(Value1,Value2);
console.log("Substratin is : "+Result);
