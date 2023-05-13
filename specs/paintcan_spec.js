const assert = require('assert');
const Decorator = require('../models/decorator.js');
const PaintCan = require('../models/paintcan.js');
const Room = require('../models/room.js');

describe("PaintCan", function () {

    let paint;
    let paint2;

    beforeEach(function () {
        paint = new PaintCan(25);
        paint2 = new PaintCan(0);
    });

    it('should have a number of litres of paint', function(){
        assert.strictEqual(25, paint.litres);
    });

    it('should be able to check if it is empty (not empty)', function () {
        assert.strictEqual(false, paint.isEmpty());
        console.log (`paint is ready to use!`)
    });

    it('should be able to check if it is empty (is empty)', function () {
        assert.strictEqual(true, paint2.isEmpty());
        console.log(`paint is empty`);
    });

    it('should be able to empty itself of paint', function () {
        paint.empty();
        assert.strictEqual(0, paint.litres);
    });

})