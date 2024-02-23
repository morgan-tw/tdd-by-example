export default class Money {
    amount;
    currency;

    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    equals(anotherAmount) {
        return this.amount === anotherAmount.amount && this.currency === anotherAmount.currency;
    }

    plus(anotherAmount) {
        return new Money(this.amount + anotherAmount.amount, this.currency);
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }
}