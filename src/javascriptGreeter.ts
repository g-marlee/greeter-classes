const { Greeter } = require("./greeter"); 

export class JavaScriptGreeter extends Greeter {
    constructor() {
        super();
    };

    greet(name: string): string {
        return `console.log(${this.greeting}, ${name})`;
    };
}