export default class User {
    constructor(public username: string, public age: number) {}
    public log(): void {
        console.log(`${this.username} - ${this.age}`);
    }
}

export function userHelper(): void {
    console.log("Helppppp");
}