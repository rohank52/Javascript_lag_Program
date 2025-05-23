function Addition (Arr : number []) : void //funtion defination
{
  console.log("Element of array are : ");

  var Sum : number = 0;
  var i : number = 0;

  for ( i=0; i < Arr.length; i++)
  { 
    Sum = Sum + Arr[i];

    
  }
  return Sum;  

}



var Marks : number [] = [67,89,77,90,88];


//funtin call
var Result : number = 0;
Result = Addition(Marks);
console.log("Addition is : "+Result);


//funtinn arr detoy   ...




