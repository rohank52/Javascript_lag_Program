//TS oop 
//defining class and object 
var Car = /** @class */ (function () {
    function Car(num) {
        if (num === void 0) { num = 100; }
        this.lisense = num;
    }
    Car.prototype.move = function () {
    };
    return Car;
}());
console.log(new Car().lisense);
