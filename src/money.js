import Expression from "./expression";

export default class Money extends Expression {
    amount;
    currency;

    constructor(amount, currency) {
        super();
        this.amount = amount;
        this.currency = currency;
    }

    equals(anotherMoney) {
        return this.amount === anotherMoney.amount && this.currency === anotherMoney.currency;
    }

    plus(anotherMoney) {
        return new Money(this.amount + anotherMoney.amount, this.currency);
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }
}