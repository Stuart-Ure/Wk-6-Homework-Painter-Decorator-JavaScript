const Decorator = function (paintstock = []) {
    this.paintstock = paintstock;
};

Decorator.prototype.addPaint = function (paint) {
    this.paintstock.push(paint);
};

Decorator.prototype.totalStockVolume = function () {
    return this.paintstock.reduce((total, paint) => total + paint.litres, 0);
};

Decorator.prototype.hasEnoughPaint = function (room) {
    const roomArea = room.area;
    const totalPaintVolume = this.totalStockVolume();
    return totalPaintVolume >= roomArea;
};

Decorator.prototype.paintRoom = function (room) {
    const totalArea = room.area;
    const totalPaintVolume = this.totalStockVolume();

    if (totalPaintVolume >= totalArea) {
        room.areaPainted = totalArea;
        room.painted = true;
        this.paintstock = [];
        console.log ("Room painted!")
    } else {
        room.painted = false;
        console.log ("Not enough paint to finish the room!")
    }
};




module.exports = Decorator;