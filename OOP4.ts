
class Demo 
{ 
    //characteristiss
    No1 : number ;
    No2 : number ;
   

    //parametrised  construtor...
    constructor (A : number , B : number) //automatic call whwn we create obj....implisetaly...


    { 
        console.log("Inside paramatrised  constractor");
        this.No1 =  A;

        this.No2 = B;
        
    }
    
   //Behaviour 
    Display ()
    {
        console.log("Inside Display funtion of Demo class ");

    }

}
var obj1 = new Demo(10,11);   

var obj2 = new Demo(20,21);

console.log(obj1.No1);
console.log(obj1.No2);

console.log(obj2.No1);
console.log(obj2.No2); 







