export default class Franc {
    #amount;

    constructor(amount) {
        this.#amount = amount;
    }

    equals(anotherAmount) {
        return this.#amount === anotherAmount.#amount;
    }

    times(multiplier) {
        return new Franc(this.#amount * multiplier);
    }
}