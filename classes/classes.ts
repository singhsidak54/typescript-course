class Player {
    // public first: string;
    // public last: string;
    private score: number = 0;

    // constructor(first: string, last: string) {
    //     this.first = first;
    //     this.last = last;
    // }

    constructor(public first: string, public last: string, private _lives: number, protected _newLives: number) {}

    public getScore(): number {
        return this.score;
    }

    public setScore(score: number): void {
        this.score = score;
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get lives(): number {
        return this._lives;
    }

    set lives(lives: number) {
        if(lives < 0) {
            throw new Error("Lives cannot be negative");
        }
        this._lives = lives;
    }
}

const elton = new Player("Elton", "Steele", 100, 10);

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxLives() {
        // this._lives = 9999999; -> not accessible because it is private
        this._newLives = 999999999; // accessible because this is protected
    }
}

interface Colorful {
    color: string;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

const bike1 = new Bike("red");

class Jacket implements Colorful {
    constructor(public brand: string, public color: string) {}
}

const jacket1 = new Jacket("Zara", "Black");

interface Printable {
    print(): void;
}

class Shirt implements Printable {
    constructor(public brand: string) {}

    public print(): void {
        console.log(this.brand);
    }
}

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
    greet(): void {
        console.log("Hello!")
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}