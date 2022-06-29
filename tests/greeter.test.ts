import { Greeter } from "../src/greeter";

describe("Greeter class", () => {
    test("Hello, Marlee", () => {
        let greetingPhrase = "Hello";
        let name = "Marlee";
        let greeting = new Greeter(greetingPhrase);

        let fullGreeting = greeting.greet(name);

        expect(fullGreeting).toBe("Hello, Marlee!");
    });
    
    test("Howdy, partner", () => {
        let greetingPhrase = "Howdy";
        let name = "partner";
        let greeting = new Greeter(greetingPhrase);

        let fullGreeting = greeting.greet(name);

        expect(fullGreeting).toBe("Howdy, partner!");
    });
});

