var Demo = /** @class */ (function () {
    //parametrised  construtor...
    function Demo(A, B) {
        console.log("Inside paramatrised  constractor");
        this.No1 = A;
        this.No2 = B;
    }
    //Behaviour 
    Demo.prototype.Display = function () {
        console.log("Inside Display funtion of Demo class ");
    };
    return Demo;
}());
var obj1 = new Demo(10, 11);
var obj2 = new Demo(20, 21);
console.log(obj1.No1);
console.log(obj1.No2);
console.log(obj2.No1);
console.log(obj2.No2);
