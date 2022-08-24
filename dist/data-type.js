let stringValue;
let numberValue;
let booleanValue;
let undefinedValue;
let nullValue;
let symbolValue;
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
let objectValue;
let user1;
let newStringObj;
objectValue = {};
objectValue = { name: "sangwoong", age: 27 };
user1 = { name: "sangwoong", age: 27 };
newStringObj = new String(42);
let anyArray;
let stringArray;
let numberArray;
let mutipleArray;
let objectArray;
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
let tupleTwo;
let tupleThree;
tupleTwo = [27, "sangwoong"];
tupleThree = [27, "sangwoong", "Kim"];
const firstUser = {
    name: "sangwoong",
    age: 27,
};
function add(x, y) {
    return x + y;
}
const add1 = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b + c;
};
function player(name, age) {
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
const printType = (arr) => {
    arr.forEach((item) => console.log(item));
};
printType([1, 2, 3]);
printType(["a", "b", "c"]);
printType([true, false, true]);
printType([1, 2, true, false]);
printType([1, 2, true, false, "a", "b"]);
