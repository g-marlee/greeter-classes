import { HtmlGreeter } from "../src/htmlGreeter";

describe("HtmlGreeter", () => {
    test("Default returns <h1>", () => {
        let greetingPhrase = "Hello";
        let name = "Marlee";
        let greeting = new HtmlGreeter(greetingPhrase);

        let fullGreeting = greeting.greet(name);

        expect(fullGreeting).toBe("<h1>Hello, Marlee!</h1>");
    });

    test("p tagname returns <p>", () => {
        let greetingPhrase = "Howdy";
        let name = "partner";
        let tagName = "p";
        let greeting = new HtmlGreeter(greetingPhrase, tagName);

        let fullGreeting = greeting.greet(name);

        expect(fullGreeting).toBe("<p>Howdy, partner!</p>");
    });
});