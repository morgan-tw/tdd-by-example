import MoneyFactory from "../src/moneyFactory";
import Bank from "../src/bank";
import Sum from "../src/sum";

describe("Money", () => {
    it("uses USD currency for dollar", () => {
        expect(MoneyFactory.dollar(1).currency).toEqual("USD");
    });

    it("uses FRC currency for franc", () => {
        expect(MoneyFactory.franc(1).currency).toEqual("FRC");
    });

    describe("sum", () => {
        it("reduces same currency", () => {
            const sum = new Sum(MoneyFactory.dollar(3), MoneyFactory.dollar(4));
            const bank = new Bank();
            const result = bank.reduce(sum, "USD");
            expect(result).toEqual(MoneyFactory.dollar(7));
        });

        it("reduces a money", () => {
            const bank = new Bank();
            const result = bank.reduce(MoneyFactory.dollar(1), "USD");
            expect(result).toEqual(MoneyFactory.dollar(1));
        });

        it("returns an expression that can be reduced by the bank into a specific currency", () => {
            const five = MoneyFactory.dollar(5);
            const sum = five.plus(five);
            expect(sum.augend).toEqual(five);
            expect(sum.addend).toEqual(five);
            const bank = new Bank();
            const reduced = bank.reduce(sum, "USD");

            expect(reduced).toEqual(MoneyFactory.dollar(10));
        });
    });
    
    describe("multiplication", () => {
        it("returns a new money whose amount is the result of the multiplication", () => {
            const five = MoneyFactory.dollar(5);
            expect(five.times(2)).toEqual(MoneyFactory.dollar(10));
        });

        it("preservs original money", () => {
            const five = MoneyFactory.dollar(5);
            expect(five.times(2)).toEqual(MoneyFactory.dollar(10));
            expect(five.times(3)).toEqual(MoneyFactory.dollar(15));
        });
    });

    describe("are equal", () => {
        it("returns true when their amounts are equal", () => {
            expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(5))).toBeTruthy();
        });

        it("returns false when their amounts are different", () => {
            expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(6))).toBeFalsy();
        });

        it("returns false when compare with Franc", () => {
            expect(MoneyFactory.dollar(5).equals(MoneyFactory.franc(5))).toBeFalsy();
        });
    });
});