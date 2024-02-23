import Dollar from "../src/dollar";

describe("dollar", () => {
    describe("multiplication", () => {
        it("multiplies its amount by the number", () => {
            const five = new Dollar(5);
            five.times(2);
            expect(five.amount).toEqual(10);
        });
    });
});