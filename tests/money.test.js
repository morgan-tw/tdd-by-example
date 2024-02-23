import MoneyFactory from "../src/moneyFactory";

describe("Money", () => {
    it("uses USD currency for dollar", () => {
        expect(MoneyFactory.dollar(1).currency).toEqual("USD");
    });

    it("uses FRC currency for franc", () => {
        expect(MoneyFactory.franc(1).currency).toEqual("FRC");
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