import { displayError } from "../src/client/js/displayError";

describe("Testing the submit functionality", () => {
    test("Testing the displayError() function", () => {
        expect(displayError).toBeDefined();
    });
});

