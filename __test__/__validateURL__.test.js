import { validateUrl } from "../src/client/js/validateUrl";

describe("Testing the submit functionality", () => {
    test("Testing the validateUrl() function", () => {
        expect(validateUrl).toBeDefined();
    });

    test("Testing the validateUrl() function", () => {
        expect(validateUrl).toBeDefined();
    });

    test("Testing invalid url", () => {
        const invalidUrl = "index.html"
        expect(validateUrl(invalidUrl)).toBeFalsy();
    });

    test("Testing valid url", () => {
        const validUrl = "www.apple.com"
        expect(validateUrl(validUrl)).toBeTruthy();
    });
});

