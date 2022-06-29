const { JavaScriptGreeter } = require("../src/javascriptGreeter");

describe("JavaScriptGreeter class", () => {
    test("console.log(Hello, Marlee)", () => {
        const greetingPhrase = "Hello";
        const name = "Marlee";
        const greeting = new JavaScriptGreeter(greetingPhrase);

        const fullGreeting = greeting.greet(name);

        expect(fullGreeting).toBe("console.log(Hello, Marlee!)");
    }); 

    test("console.log(Howdy, partner)", () => {
        const greetingPhrase = "Howdy";
        const name = "partner";
        const greeting = new JavaScriptGreeter(greetingPhrase);

        const fullGreeting = greeting.greet(name);

        expect(fullGreeting).toBe("console.log(Howdy, partner!)");
    });
});