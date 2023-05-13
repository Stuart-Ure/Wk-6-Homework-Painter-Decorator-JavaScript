const assert = require('assert');
const Decorator = require('../models/decorator.js');
const PaintCan = require('../models/paintcan.js');
const Room = require('../models/room.js');

describe("Room", function () {
    let room;

    beforeEach(function () {
        room = new Room(50);
    });

    it("have an area in square meters", function () {
        assert.strictEqual(50, (room.area))
    });

    it("should start not painted", function () {
        assert.strictEqual(room.painted, false)
    })
    it("should be able to be painted", function () {
        room.paint();
        assert.strictEqual(room.painted, true);
    });
})

