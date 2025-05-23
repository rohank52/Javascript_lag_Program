//TS oop 
//defining class and object 
var Car1 = /** @class */ (function () {
    function Car1(num) {
        if (num === void 0) { num = 100; }
        this.lisense = num;
    }
    Car1.prototype.move = function () {
        return this.lisense;
    };
    return Car1;
}());
console.log(new Car1().move());
