window.addEventListener('resize', () => location.reload(), false);

var json = require('json/data');

var game = new Phaser.Game(
    document.documentElement.clientWidth ,
    document.documentElement.clientHeight ,
    Phaser.AUTO,
    ''
);

game.resolution = window.devicePixelRatio || 1;

import BeeWrapper from 'bee-wrapper';

var mainState = {

    preload: function () {

    },

    create: function () {

        // var graphics = game.add.graphics();

        // graphics.beginFill(0xcc00cc);
        // graphics.drawRoundedRect(10, 10, 200, 200, 5);
        // graphics.endFill();

        // game.world.setBounds(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);

        var wrapper = new BeeWrapper(game, json);



        // game.world.camera.scale.set(.5);

        // game.world.camera.setPosition(400, 400);
/*
        game.canvas.style.width = document.documentElement.clientWidth + 'px';
        game.canvas.style.height = document.documentElement.clientHeight + 'px';
*/


    },

    update: function () {

        // console.log('upda!!te');
    }

};

game.state.add('mainState', mainState);
game.state.start('mainState');
