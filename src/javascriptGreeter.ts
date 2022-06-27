const { Greeter } = require("./greeter"); 

export class JavaScriptGreeter extends Greeter {
    constructor(greeting: string) {
        super(greeting);
    };

    greet(name: string): string {
        return `console.log(${this.greeting}, ${name})`;
    };
}