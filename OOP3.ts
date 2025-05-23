
class Demo 
{ 
    //characteristiss
    No1 : number ;
    No2 : number ;
   

    //Defult construtor...
    constructor () //automatic call whwn we create obj....implisetaly...


    { 
        console.log("Inside defalt constractor");
        this.No1 = 0;
        this.No2 = 0;
        
    }
    
   //Behaviour 
    Display ()
    {
        console.log("Inside Display funtion of Demo class ");

    }

}
var obj = new Demo();//object  

obj.Display() ;
console.log(obj.No1);
console.log(obj.No2);
