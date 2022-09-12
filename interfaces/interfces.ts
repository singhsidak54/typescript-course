interface Person {
    name: string;
    age: number;
};

const person: Person = { name: "Sam", age: 24 };

interface Vehicle {
    readonly type: string;
    wheels: number;
    name?: string;
};

interface PersonNew {
    readonly id: number;
    first: string;
    nickname?: string;
    sayHi: () => string;
    // sayHi(): string; -> valid
};

const thomas: PersonNew = {
    id: 123,
    first: "thomas",
    nickname: "Tom",
    sayHi: () => {
        return "Hello!";
    }
};

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
};

const shoes: Product = {
    name: "Blue Shoes",
    price: 100,
    applyDiscount(discount: number) {
        this.price = this.price * (1 - discount);
        return this.price;
    }
};

interface A {
    name: string;
};

//this will extend the current interface with this property
interface A {
    age: number;
};

const temp: A = {
    name: "Temp",
    age: 25
};

/* Inheritance */

interface Dog {
    name: string;
    age: number;
    breed: string;
    bark(): string;
}

interface ServiceDog extends Dog {
    job: "police" | "guide";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4,
    breed: "Lab",
    bark() {
        return "WOOF";
    },
    job: "police"
};

// Note - Can do multiple inheritance

interface Employee {
    readonly id: number;
    email: string;
};

interface Engineer extends Person, Employee {
    level: string;
    languages: string[];
};

/* Interfaces vs  Type Aliases */

// - Interface cannot describe shape of a literal type.
type Color = "red" | "blue"; // Cannot do this with interfaces

// - Interface can be reopened after they've been created. This cannot be done with type

// - Interface allows us to extend properties using extend keyword but in Types we have to use & keyword.