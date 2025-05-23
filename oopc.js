var car = /** @class */ (function () {
    function car(num) {
        if (num === void 0) { num = 100; }
        this.lisense = num;
    }
    car.prototype.move = function () {
        return this.lisense;
    };
    return car;
}());
var ob = new car();
console.log(ob);
