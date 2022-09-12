function identiy<T>(item: T): T {
    return item;
}

function getRandomElement<T>(list: T[]): T {
    let index = Math.floor(Math.random() * list.length)
    return list[index];
}

function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    };
}

const comboObj = merge( { name: "colt" }, { pets: ["blue", "elton"] } );

// merge( {name: "abc"}, 9); not allowed

interface Lengthy {
    length: number;
};

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return 2 * thing.length;
}

function makeEmptyList<T = number>(): T[] {
    return [];
}

makeEmptyList<string>();
makeEmptyList();

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class PlayList<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el);
    }
}

const songs = new PlayList<Song>();
const videos = new PlayList<Video>();