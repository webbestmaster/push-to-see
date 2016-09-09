var config = {

    size: {
        min: 20,
        max: 60,
        default: 60
    },
    round: 5,
    margin: 1

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

        graphics.beginFill(0xCC0000);
        margin *= 2;
        graphics.drawRoundedRect(margin, margin, defaultSize - margin * 2, defaultSize - margin * 2, config.round);
        graphics.endFill();

        graphics.pivot.set(defaultSize / 2, defaultSize / 2);
        graphics.anchor.set(0.5, 0.5);
        graphics.rotation = Math.PI / 4;

        graphics.position.x = Math.random() * game.world.width;
        graphics.position.y = Math.random() * game.world.height;

        graphics.alpha = 0;

        bee.moveToStart();

    }

    moveToStart() {

        var bee = this,
            graphics = bee.graphics;

        var lt = new gsap.TimelineMax({onComplete: () => bee.moveToEnd()});

        bee.tweens.start = lt;

        lt
            .to(graphics.position, 10, {
                x: bee.startX,
                y: bee.startY,
                ease: gsap.Bounce.easeOut,
                delay: Math.random() * 3
            })
            .to(graphics, 2, {alpha: 1, delay: Math.random() * 2}, 0);


    }

    moveToEnd() {

        var bee = this,
            defaultSize = config.size.default,
            graphics = bee.graphics;

        var lt = new gsap.TimelineMax();

        lt
            .to(graphics.position, 4, {
                x: bee.endX * defaultSize + bee.startX + config.size.default / 2,
                y: bee.endY * defaultSize + bee.startY + config.size.default / 2,
                ease: gsap.Elastic.easeOut.config(1, 0.3)
            })
            .to(graphics, 8, { rotation: Math.PI * 4.25 * (Math.random() > 0.5 ? -1 : 1), ease: gsap.Power3.easeOut }, 0)


    }

}
