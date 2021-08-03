class GuessingGame {
    max;
    min;
    mid;
    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid = this.min + Math.ceil((this.max-this.min)/2);
        return this.mid
    }

    lower() {
        this.max = this.mid
    }

    greater() {
        this.min = this.mid
    }
}

module.exports = GuessingGame;
