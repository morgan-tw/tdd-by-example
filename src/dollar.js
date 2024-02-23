export default class Dollar {
    amount;

    constructor(amount) {
        this.amount = amount;
    }

    times(multiplier) {
        this.amount *= multiplier;
    }
}