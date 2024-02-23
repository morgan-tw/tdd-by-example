import Money from "./money";

export default class Dollar extends Money {
    constructor(amount) {
        super(amount, "USD");
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }
}