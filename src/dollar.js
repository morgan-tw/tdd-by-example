import Money from "./money";

export default class Dollar extends Money {
    constructor(amount) {
        super(amount);
    }

    equals(anotherAmount) {
        return this.amount === anotherAmount.amount;
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }
}