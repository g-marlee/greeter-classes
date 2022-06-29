import { LoudGreeter } from "../src/loudGreeter";

describe("LoudGreeter", () => {
    test("Not using addVolume adds two exclamation marks", () => {
        let greetingPhrase = "Hello";
        let name = "Marlee";
        let greeting = new LoudGreeter(greetingPhrase)
        
        let fullGreeting = greeting.greet(name);

        expect(fullGreeting).toBe("Hello, Marlee!!!");
    });

    test("Using addVolume adds more exclamation marks", () => {
        let greetingPhrase = "Howdy";
        let name = "partner";
        let greeting = new LoudGreeter(greetingPhrase)
        
        greeting.addVolume();
        let fullGreeting = greeting.greet(name);

        expect(fullGreeting).toBe("Howdy, partner!!!!");
    });
});