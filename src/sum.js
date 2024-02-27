import Expression from "./expression";
import Money from "./money";

export default class Sum extends Expression {
    augend;
    addend;

    constructor(augend, addend) {
        super();
        this.augend = augend;
        this.addend = addend;
    }

    reduce(bank, to) {
        return new Money(this.augend.amount + this.addend.amount, to);
    }
}