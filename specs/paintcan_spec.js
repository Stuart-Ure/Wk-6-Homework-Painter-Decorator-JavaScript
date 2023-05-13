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

})