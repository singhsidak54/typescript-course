const activeUsers: [] = [];

//illegal
// activeUsers.push("abc");

const names: string[] = [];
names.push("abc");

const ageList: number[] = [1,2,3];
ageList.push(4);
ageList[0] = 10;


/* Another Syntax */

const bools: Array<boolean> = [];

type Point = {
    x: number;
    y: number;
};

const points: Array<Point> = [];
const points2: Point[] = [];

/* Multidimensional Arrays */

const board: string[][] = [["1", "0", "0"], ["0", "1", "1"]];