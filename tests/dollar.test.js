import Dollar from "../src/dollar";

describe("dollar", () => {
    describe("multiplication", () => {
        it("multiplies its amount by the number", () => {
            const five = new Dollar(5);
            five.times(2);
            expect(five.amount).toEqual(10);
        });

        it("preserves original dollar", () => {
            const five = new Dollar(5);
            five.times(2);
            expect(five.amount).toEqual(10);
            five.times(3);
            expect(five.amount).toEqual(15);
        });
    });
});