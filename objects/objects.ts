function printName(person: { fistName: string, lastName: string }): void {
    console.log(`${person.fistName} ${person.lastName}`)
}

printName({fistName: "Thomas", lastName: "Jenkins"});

//gives error
// printName({fistName: "Thomas", lastName: "Jenkins", age: 20});

const singer = { fistName: "Thomas", lastName: "Jenkins", age: 20 }
printName(singer); //doesn't give error. TypeScript ignores excess properties in this case

let coordinate: { x: number; y: number } = { x: 20, y: 30 };

function randomCoordinate(): {x: number; y: number} {
    return { x: Math.random(), y: Math.random() };
}


/* Type Aliases */

type Person = {
    name: string;
    age: number;
};

type Point = {
    x: number;
    y: number;
};

function randomCoordinate2(): Point {
    return { x: Math.random(), y: Math.random() };
}

/* Nested Objects */

type Song = {
    title: string;
    artist: string;
    streams: number;
    credits: { producer: string; writer: string };
}

function calculatePayout(song: Song): number {
    return song.streams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "MyTitile",
    artist: "My Artitst",
    streams: 10000,
    credits: { producer: "My Producer", writer: "My Writer"}
};

printSong(mySong);
calculatePayout(mySong);

/* Optional Properties */

type Point3D = {
    x: number;
    y: number;
    z?: number;
}

const myPoint: Point3D = { x: 10, y: 20, z: 30 };
const myPoint2: Point3D = {x: 10, y: 20 };

/* Readonly properties */
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 200,
    username: "abc"
}

// not allowed
// user.id = 100


/* Intersection types */

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
};

// why is this called intersection??????!!! isn't intersection = only common props

// Can also be done using anonymous types Dog & Cat & { age: number } is valid