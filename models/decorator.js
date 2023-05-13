const Decorator = function (paintstock = []) {
    this.paintstock = paintstock;
};

Decorator.prototype.addPaint = function (paint) {
    this.paintstock.push(paint);
};

Decorator.prototype.totalStockVolume = function () {
    return this.paintstock.reduce((total, paint) => total + paint.litres, 0);
};

module.exports = Decorator;