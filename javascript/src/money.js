import Expression from "./expression";
import MoneyFactory from "./moneyFactory";
import Sum from "./sum";

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
        return new Sum(this, anotherMoney);
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }

    reduce(to) {
        const rate = (this.currency === "FRC" && to === "USD") ? 2 : 1;
        return new Money(this.amount / rate, to);
    }
}