let myTuple: [number, string];

myTuple = [1, "abc"]; // valid

// myTuple = ["abc", 1] -> invalid

const color: [number, number, number] = [255, 0, 255];

type MyResponse = [number, string];
const goodRes: MyResponse = [200, "Ok"];

// goodRes[0] = "abc" -> not allowed
goodRes.push("abc") // allowed -> limitation of tuples
goodRes.pop()
goodRes.pop()
goodRes.pop() // allowed