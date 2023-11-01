const assert = require("assert")

describe("Simple calculations", () => {
    before(() => {
        console.log("This part executes once before all tests");
    });

    after(() => {
        console.log("This part executes once after all tests");
    });

    describe("Test1", () => {
        beforeEach(() => {
            console.log("Executes before every test.js");
        });

        it("Is returning 5 when adding 2 + 3", () => {
            assert.equal(2 + 3, 5);
        });

        it("Is returing 6 when multiplying 2 * 3", () => {
            assert.equal(2 * 3, 6);
        });
    });

    describe("Test2", () => {
        beforeEach(() => {
            console.log( "executes before every test.js" );
        });

        it("Is returning 4 when adding 2 + 3", () => {
            assert.equal(2 + 2, 4);
        });

        it("Is returning 8 when multiplying 2 * 4", () => {
            assert.equal(2*4, 8);
        });
    });
})