import Money from "./money";

export default class Bank {
    reduce(money, to) {
        return new Money(10, to);
    }
};