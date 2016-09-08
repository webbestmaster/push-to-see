var config = {

    size: {
        min: 20,
        max: 60,
        default: 40
    },
    round: 10,
    margin: 2,
    deltaMove: 5

};

var gsap = require('gsap');

export default class Bee {

    constructor(game, endX, endY) {

        var bee = this,
            defaultSize = config.size.default,
            graphics = game.add.graphics(),
            margin = config.margin;

        var prevX = 0;
        var prevY = 0;

        var dX = Math.random() * config.margin * 20 * (Math.random() > 0.5 ? 1 : -1);
        var dY = Math.random() * config.margin * 20 * (Math.random() > 0.5 ? 1 : -1);

        bee.delta = {x: dX, y: dY};

        gsap.TweenMax.to(bee.delta, 1.5, {x: -dX, y: -dY, ease: Power0.easeNone, repeat: -1, yoyo: true });



        bee.endX = endX * defaultSize;
        bee.endY = endY * defaultSize;

        bee.startX = game.world.bounds.centerX;
        bee.startY = game.world.bounds.centerY;

        bee.graphics = graphics;

        graphics.beginFill(0xffffff);
        graphics.drawRoundedRect(margin, margin, defaultSize - margin * 2, defaultSize - margin * 2, config.round);
        graphics.endFill();


        graphics.x = bee.startX - defaultSize / 2;
        graphics.y = bee.startY - defaultSize / 2;

        // graphics.alpha = 0.5;



        this.moveToEnd();

    }

    moveToEnd() {

        var bee = this,
            graphics = bee.graphics;

        var prevX = 0;
        var prevY = 0;


        gsap.TweenMax.to(graphics, 20, {x: bee.endX, y: bee.endY, ease: Power2.easeInOut, onUpdate: function () {

            graphics.x -= prevX;
            graphics.x += bee.delta.x;
            prevX = bee.delta.x;

            graphics.y -= prevY;
            graphics.y += bee.delta.y;
            prevY = bee.delta.y;

            // graphics.y += this.target.y;

        }});


        // graphics.scale.x = 0.5;


    }

}
