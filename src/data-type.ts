// ================================== Primitive Type ==================================
let stringValue: string;
let numberValue: number;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let symbolValue: symbol;

stringValue = "sangwoong";
stringValue = "sangwoong";
stringValue = `sangwoong age: ${1 + 1}`;
stringValue = undefined;
stringValue = null;

numberValue = 27;
numberValue = undefined;
numberValue = null;

booleanValue = true;
booleanValue = false;
booleanValue = undefined;
booleanValue = null;

undefinedValue = undefined;
undefinedValue = null;

nullValue = null;
nullValue = undefined;

symbolValue = Symbol();

// ================================== Reference Type ==================================
let objectValue: object;
let user1: { name: string; age: number };
let newStringObj: object;

objectValue = {};
objectValue = { name: "sangwoong", age: 27 };

user1 = { name: "sangwoong", age: 27 };

newStringObj = new String(42);

// ================================== Array ==================================
let anyArray: any[];
let stringArray: string[]; // same as Array<string>
let numberArray: number[]; // same as Array<number>
let mutipleArray: (string | number)[];
let objectArray: object[]; // same as Array<object>

anyArray = [1, 2, "3", true];
stringArray = ["a", "b", "c"];
numberArray = [1, 2, 3];
mutipleArray = [1, "a"];
objectArray = [
	{
		name: "sangwoong",
		age: 27,
	},
];

// ================================== Tuple ==================================
let tupleTwo: [number, string];
let tupleThree: [number, string, string];

tupleTwo = [27, "sangwoong"];
tupleThree = [27, "sangwoong", "Kim"];

// ================================== Alias ==================================
type User = {
	name: string;
	age?: number; // optional type
};

const firstUser: User = {
	name: "sangwoong",
	age: 27,
};

// ================================== Function ==================================
type Add = {
	(a: number, b: number): number;
	(a: number, b: number, c: number): number;
};

function add(x: number, y: number) {
	return x + y;
}
// same as
// const add = (x:number, y:number) => x+y

const add1: Add = (a, b, c?: number) => {
	if (c) return a + b + c;
	return a + b + c;
};

function player(name: string, age?: number) {
	return {
		name,
		age,
	};
}

function player2(name = "name", age = 0) {
	return {
		name,
		age,
	};
}

// ================================== Generic ==================================
type Type = {
	<Type>(arr: Type[]): void;
};

const printType: Type = (arr) => {
	arr.forEach((item) => console.log(item));
};

printType([1, 2, 3]);
printType(["a", "b", "c"]);
printType([true, false, true]);
printType([1, 2, true, false]);
printType([1, 2, true, false, "a", "b"]);

// ================================== Interface ==================================

interface Player {
	name: string;
	age: number;
}

interface Player1 extends Player {
	position: string;
}

const player1: Player1 = {
	name: "sangwoong",
	age: 28,
	position: "midfielder",
};

// ================================== Class ==================================
abstract class User12 {
	constructor(
		private name: string, // 해당 클래스에서만 접근이 가능
		private age: number,
		public position: string, // 외부 어디에서나 접근 가능
		protected backNumber: number, // 상속관계일 때 접근 가능
	) {}
	abstract getPosition(): void;

	getProfile() {
		return `${this.name} + ${this.age}`;
	}
}

class Player12 extends User12 {
	getPosition() {
		console.log(this.position);
	}
}

const sangwoong = new Player12("sangwoong", 27, "midfielder", 3);
