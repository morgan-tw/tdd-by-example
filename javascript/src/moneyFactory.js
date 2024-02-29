import Money from "./money";

export default class MoneyFactory {
    static dollar(amount) {
        return new Money(amount, "USD");
    }

    static franc(amount){
        return new Money(amount, "FRC");
    }
}