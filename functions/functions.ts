// by default TS assumes type is any. So calling square(2) and square("abc") are both legal
function square(num) {
    return num * num;
}

square(10);
square("abc");

function square2(num: number) {
    return num * num;
}

square2(5);

//illegal
// square2("abc");

function greet(person: string) {
    return `Hi there, ${person}!`
}

greet("Sam");


/*  Default Values */ 

function greet2(person: string = "stranger") {
    return `Hi there, ${person}!`
}

greet2();
greet2("Tony");


/* Return Type Annotations */

//TypeScript is smart to infer what is the return type. So it isn't mandatory to specify the return type.

const addNums = (num1: number, num2: number): number => {
    return num1 + num2;
}

addNums(4, 5);

//Multiple return types
function rando(num: number): string | number {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}


/* Anonymous functions */
const colors = ["red", "orange", "yellow"];

// no need to anotate here because typescript determines the type by looking at the array.
colors.map(color => {
    color.toUpperCase();
})


/* Never type */

function makeError(msg: string): never {

    //gives error because this function should never return
    // return "abc"';

    throw new Error(msg);
}

// Note: never type isn't same as void type.