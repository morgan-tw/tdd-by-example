import Money from "./money";

export default class Bank {
    rates = {};

    reduce(expression, to) {
        const sum = expression.augend.amount + expression.addend.amount;
        return new Money(sum, to);;
    }

    add(origin, destination, rate) {
        rates[origin][destination] = rate;
    }
};