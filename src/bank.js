import Money from "./money";

export default class Bank {
    rates = {};

    addRate(origin, destination, rate) {
        
    }

    reduce(expression, to) {
        return expression.reduce(to);
    }

    add(origin, destination, rate) {
        rates[origin][destination] = rate;
    }
};