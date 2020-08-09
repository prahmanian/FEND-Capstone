import { validateInput } from "../src/client/js/validateInput";

describe("Testing the submit functionality", () => {
    test("Testing the validateInput() function", () => {
        expect(validateInput).toBeDefined();
    });

    test("Testing the validateInput() function", () => {
        expect(validateInput).toBeDefined();
    });

    test("Testing invalid inputs", () => {
        const city = "Austin34"
        const state = "Texa$"
        const date = "2020-10-Oct"
        expect(validateInput(city, state, date)).toBeFalsy();
    });

    test("Testing valid inputs", () => {
        const city = "Austin"
        const state = "Texas"
        const date = "2020-10-10"
        expect(validateInput(city, state, date)).toBeTruthy();
    });
});

