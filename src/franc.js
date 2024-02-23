import Money from "./money";

export default class Franc extends Money {
    constructor(amount) {
        super(amount, "FRC");
    }
}