var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Inside defalt constractor");
        this.No1 = 0;
        this.No2 = 0;
    }
    //Behaviour 
    Demo.prototype.Display = function () {
        console.log("Inside Display funtion of Demo class ");
    };
    return Demo;
}());
var obj = new Demo(); //object  
obj.Display();
console.log(obj.No1);
console.log(obj.No2);
