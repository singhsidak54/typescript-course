// not recommended but possible
let age: number | string = 10;

age = "a"

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = { x: 1, y: 2 };

coordinates = { lat: 10, long: 20};

function printAge(age: number | string): void {
    console.log(`You're ${age} years old.`);

    //But TS will complain if we try to do this
    // age.toUpperCase()

    //But we can do it like this
    if(typeof age === "string") {
        age = age.toUpperCase();
    }
}


const nums: any[] = [1,2,3,4,"abc"];

const coordinatesArray: (Point | Loc)[] = [];

//this is different
const coordinatesArray2: Point[] | Loc[] = [];


/* Literal Types */

let zero: 0 = 0;

// not possible
// zero = 1;

const giveAnswer = (answer: "yes" | "no") => {
    return `The answer if ${answer}.`
}

giveAnswer("yes"); // works
// giveAnswer("maybe")  -> not possible

type DayOfWeek = 
    | "Mon"
    | "Tues"
    | "Wed"
    | "Thurs"
    | "Fri"
    | "Sat"
    | "Sun";

let today: DayOfWeek = "Mon";