import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, subtract, multiply, divide } from "./utils";

console.log("From index file");

const elton = new Dog("Elton", "Aussie", 0.5);
const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Desert Springs Shelter");
elton.bark();
buffy.bark();

console.log(add(4,5));
console.log(divide(10,5));
console.log(multiply(4,2));