var config = {

    size: {
        min: 20,
        max: 60,
        default: 20
    },
    round: 5,
    margin: 2

};

var gsap = require('gsap');

export default class Bee {

    constructor(game, wrapper, endX, endY) {


        config.size.default = (game.world.width / wrapper.getWidth() * 0.9) | 0;

        var bee = this,
            defaultSize = config.size.default,
            graphics = game.add.graphics(),
            margin = config.margin;

        bee.wrapper = wrapper;

        bee.tweens = {
            start: null,
            end: null
        };

        bee.endX = endX - wrapper.getWidth() / 2;
        bee.endY = endY - wrapper.getHeight() / 2;

        bee.startX = game.world.centerX;
        bee.startY = game.world.centerY;

        bee.graphics = graphics;

        graphics.beginFill(0xffffff);
        graphics.drawRoundedRect(margin, margin, defaultSize - margin * 2, defaultSize - margin * 2, config.round);
        graphics.endFill();

        // graphics.pivot.x = defaultSize / 2;
        // graphics.pivot.y = defaultSize / 2;
        // graphics.anchor.x = 0.5;
        // graphics.anchor.y = 0.5;
        graphics.rotation = Math.PI / 4;

        graphics.position.x = Math.random() * game.world.width;
        graphics.position.y = Math.random() * game.world.height;

        graphics.alpha = 0;

        bee.moveToStart();

   }

    moveToStart () {

        var bee = this,
            graphics = bee.graphics;

        bee.tweens.start = gsap.TweenMax.to(graphics.position, 10, { x: bee.startX, y: bee.startY, ease: gsap.Bounce.easeOut });

        if (graphics.alpha !== 1) {
            gsap.TweenMax.to(graphics, 4, {alpha: 1});
        }

    }

    moveToEnd() {

        var bee = this,
            defaultSize = config.size.default,
            graphics = bee.graphics;

        bee.tweens.end = gsap.TweenMax.to(graphics.position, 4, {
            x: bee.endX * defaultSize + bee.startX + config.size.default / 2,
            y: bee.endY * defaultSize + bee.startY + config.size.default / 2,
            ease: gsap.Bounce.easeOut
        });

    }

}
