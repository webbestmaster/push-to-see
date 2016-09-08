var json = require('json/data');

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

import BeeWrapper from 'bee-wrapper';


var mainState = {

    preload: function () {


    },

    create: function () {

        var ff = new BeeWrapper(game, json);



    },

    update: function () {


        // console.log('upda!!te');
    }

};

game.state.add('mainState', mainState);
game.state.start('mainState');
