const assert = require('assert');
const Decorator = require('../models/decorator.js');
const PaintCan = require('../models/paintcan.js');
const Room = require('../models/room.js');

describe("Decorator", function () {
    let decorator;
    let paint;
    let room;

    beforeEach(function () {
        decorator = new Decorator();
        paint = new PaintCan(25);
        room = new Room(50);

    });

    it("should start with an empty paint stock", function () {
        const decorator = new Decorator([]);
        assert.deepStrictEqual(decorator.paintstock, []);
    });

    it("should be able to add a can of paint to paintstock", function () {
        const paintCan = new PaintCan(25);
        decorator.addPaint(paintCan);
        assert.deepStrictEqual(decorator.paintstock, [paint]);
    });

    it("should be able to calculate total litres of paint in stock", function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        assert.strictEqual(decorator.totalStockVolume(), 50);
    });

    it("should be able to calculate whether it has enough paint to paint a room", function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        const room = new Room(50);

        const hasEnoughPaint = decorator.hasEnoughPaint(room);
        assert.strictEqual(hasEnoughPaint, true);
    });

    it("should be able to calculate wether it has enough paint to paint a room(not enough)", function () {
        assert.strictEqual(false, decorator.hasEnoughPaint(room));
    });

    it("should be able to paint a room if it has enough paint", function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        decorator.paintRoom(room);
        assert.strictEqual(50, room.areaPainted);
    });

    it("should not be able to paint a room if it does not have enough paint", function () {
        const room = new Room(50);
        const hasEnoughPaint = decorator.hasEnoughPaint(room);
        decorator.paintRoom(room);
        assert.strictEqual(room.painted, false);
        assert.strictEqual(hasEnoughPaint, false);
    });

})
