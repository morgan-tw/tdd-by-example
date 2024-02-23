import Franc from "../src/franc";
import MoneyFactory from "../src/moneyFactory";

describe("Franc", () => {
    describe("multiplication", () => {
        it("returns a new value whose amount is the result of the multiplication", () => {
            const five = MoneyFactory.franc(5);
            expect(five.times(2)).toEqual(MoneyFactory.franc(10));
        });

        it("preservs original franc", () => {
            const five = MoneyFactory.franc(5);
            expect(five.times(2)).toEqual(MoneyFactory.franc(10));
            expect(five.times(3)).toEqual(MoneyFactory.franc(15));
        });
    });

    describe("are equal", () => {
        it("returns true when their amounts are equal", () => {
            expect(MoneyFactory.franc(5).equals(MoneyFactory.franc(5))).toBeTruthy();
        });

        it("returns false when their amounts are different", () => {
            expect(MoneyFactory.franc(5).equals(MoneyFactory.franc(6))).toBeFalsy();
        });

        it("returns false when compare with Dollaer", () => {
            expect(MoneyFactory.franc(5).equals(MoneyFactory.dollar(5))).toBeFalsy();
        });
    });
});