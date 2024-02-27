import Money from "./money";

export default class Bank {
    rates = {};

    reduce(expression, to) {
        return expression.reduce(to);
    }

    add(origin, destination, rate) {
        rates[origin][destination] = rate;
    }
};