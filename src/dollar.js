export default class Dollar {
    amount;

    constructor(amount) {
        this.amount = amount;
    }

    equals(anotherAmount) {
        return this.amount === anotherAmount.amount;
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }
}