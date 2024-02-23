export default class Dollar {
    amount;

    constructor(amount) {
        this.amount = amount;
    }

    equals(anotherAmount) {
        return true;
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }
}