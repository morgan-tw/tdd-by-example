import Dollar from "../src/dollar";

describe("dollar", () => {
    describe("multiplication", () => {
        it("returns a new value whose amount is the result of the multiplication", () => {
            const five = new Dollar(5);
            expect(five.times(2)).toEqual(new Dollar(10));
        });

        it("preservs original dollar", () => {
            const five = new Dollar(5);
            expect(five.times(2)).toEqual(new Dollar(10));
            expect(five.times(3)).toEqual(new Dollar(15));
        });
    });

    describe("are equal", () => {
        it("returns true when their amounts are equal", () => {
            expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
        });

        it("returns false when their amounts are different", () => {
            expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
        });
    });
});