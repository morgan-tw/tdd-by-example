import Sum from "./sum";

export default class Money {
    amount;
    currency;

    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    equals(anotherMoney) {
        return this.amount === anotherMoney.amount && this.currency === anotherMoney.currency;
    }

    plus(anotherMoney) {
        return new Sum(this, anotherMoney);
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }
}