var cara = /** @class */ (function () {
    function cara(num) {
        if (num === void 0) { num = 100; }
        this.lisense = num;
    }
    cara.prototype.move = function () {
        return this.lisense;
    };
    return cara;
}());
var ob = new cara();
console.log(ob.lisense);
