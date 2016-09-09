var config = {

    size: {
        min: 20,
        max: 60,
        default: 30
    },
    round: 5,
    margin: 2

};

var gsap = require('gsap');

export default class Bee {

    constructor(game, endX, endY) {

        var bee = this,
            defaultSize = config.size.default,
            graphics = game.add.graphics(),
            margin = config.margin;

        bee.endX = endX;
        bee.endY = endY;

        bee.graphics = graphics;

        graphics.beginFill(0xffffff);
        graphics.drawRoundedRect(margin, margin, defaultSize - margin * 2, defaultSize - margin * 2, config.round);
        graphics.endFill();

        graphics.pivot.x = defaultSize / 2;
        graphics.pivot.y = defaultSize / 2;
        graphics.anchor.x = 0.5;
        graphics.anchor.y = 0.5;
        graphics.rotation = Math.PI / 4;
        graphics.alpha = 1 / 4;

        this.moveToEnd();

    }

    moveToEnd() {

        var bee = this,
            defaultSize = config.size.default,
            graphics = bee.graphics;

        graphics.position.x = bee.endX * defaultSize;
        graphics.position.y = bee.endY * defaultSize;

    }

}
