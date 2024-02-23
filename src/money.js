export default class Money {
    amount;

    constructor(amount) {
        this.amount = amount;
    }

    equals(anotherAmount) {
        return this.amount === anotherAmount.amount;
    }
}