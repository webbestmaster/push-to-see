import Bee from 'bee';

var gsap = require('gsap');

export default class BeeWrapper {

    constructor(game, data) {

        var wrapper = this,
            map = data.map,
            bees = [];

        wrapper._bees = bees;

        wrapper._map = {
            width: map[0].length,
            height: map.length,
            value: map
        };

        map.forEach(function (string, endX) {

            Array.prototype.forEach.call(string, function (letter, endY) {

                return letter.trim() && bees.push(new Bee(game, wrapper, endY, endX));

            });

        });

    }

    getWidth() {
        return this._map.width;
    }

    getHeight() {
        return this._map.height;
    }




}
