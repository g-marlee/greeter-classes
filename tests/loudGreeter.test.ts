import { LoudGreeter } from "../src/loudGreeter";

describe("LoudGreeter", () => {
    test("Not using addVolume adds two exclamation marks", () => {
        let greetingPhrase = "Hello";
        let name = "Marlee";
        let greeting = new LoudGreeter(greetingPhrase)
        
        let fullGreeting = greeting.greet(name);

        expect(fullGreeting).toBe("Hello, Marlee!!!");
    })
})