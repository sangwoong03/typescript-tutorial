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
