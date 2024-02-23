import Franc from "../src/franc";

describe("Franc", () => {
    describe("multiplication", () => {
        it("returns a new value whose amount is the result of the multiplication", () => {
            const five = new Franc(5);
            expect(five.times(2)).toEqual(new Franc(10));
        });

        it("preservs original franc", () => {
            const five = new Franc(5);
            expect(five.times(2)).toEqual(new Franc(10));
            expect(five.times(3)).toEqual(new Franc(15));
        });
    });

    describe("are equal", () => {
        it("returns true when their amounts are equal", () => {
            expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
        });

        it("returns false when their amounts are different", () => {
            expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
        });
    });
});