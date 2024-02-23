import Dollar from "../src/dollar";

describe("dollar", () => {
    describe("multiplication", () => {
        it("returns a new value whose amount is the result of the multiplication", () => {
            const five = new Dollar(5);
            const product = five.times(2);
            expect(product.amount).toEqual(10);
        });

        it("preservs original dollar", () => {
            const five = new Dollar(5);
            let product = five.times(2);
            expect(product.amount).toEqual(10);
            product = five.times(3);
            expect(product.amount).toEqual(15);
        });
    });

    describe("are equal", () => {
it("returns true when their amounts are equal", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
})
    });
});