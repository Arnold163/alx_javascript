//square cont
const SquareBase = require('./5-square');

class Square extends SquareBase {
    charPrint (c) {
        if (c === undefined) {
            c = 'X';
        }

        if (this.width && this.height) {
            for (let i = 0; i <this.height; i++) {
                console.log(c.repeat(thi.width));
            }
        }
    }
}

module.exports = Square;
