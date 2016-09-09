var json = require('json/data');

var game = new Phaser.Game(document.documentElement.clientWidth, document.documentElement.clientHeight, Phaser.AUTO, '');

import BeeWrapper from 'bee-wrapper';

var mainState = {

    preload: function () {

    },

    create: function () {


        // game.world.setBounds(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);

        var wrapper = new BeeWrapper(game, json);

        // game.world.camera.scale.set(.5);

        // game.world.camera.setPosition(400, 400);


    },

    update: function () {

        // console.log('upda!!te');
    }

};

game.state.add('mainState', mainState);
game.state.start('mainState');
