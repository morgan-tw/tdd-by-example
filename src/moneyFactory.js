import Dollar from "./dollar";
import Franc from "./franc";

export default class MoneyFactory {
    static dollar(amount) {
        return new Dollar(amount);
    }

    static franc(amount){
        return new Franc(amount);
    }
}