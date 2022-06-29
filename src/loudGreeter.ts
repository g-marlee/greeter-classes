const { Greeter } = require("../src/greeter");

export class LoudGreeter extends Greeter {
    constructor( greeting: string, private extra: string = "!!") {
        super(greeting);
    };

    addVolume(): void {
        this.extra += "!";
    };

    greet(name: string): string {
        return `${this.greeting}, ${name}!${this.extra}`;
    };
}