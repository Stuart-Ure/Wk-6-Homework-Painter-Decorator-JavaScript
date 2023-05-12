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

    // it("should be able to add a can of paint to paintstock", function () {
    //     const decorator = new Decorator([]);
    //     const paintCan = new PaintCan(25);
    //     // decorator.addPaintCan(paintCan);
    //     assert.deepStrictEqual(decorator.paintstock, [paintCan]);
    // });

})