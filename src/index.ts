// // number : Used for integers and floating-point numbers.
// let age: number = 20; // integer number
// let price: number = 9.99; // floating-point number

// console.log(age )


// let binary: number = 0b1010; // binary number
// let decimal: number = 6; // decimal number
// let octal: number = 0o744; // octal number
// let hex: number = 0xf00d; // hexadecimal number

// console.log(binary);


// // String : Used for text. It must be enclosed within single quotes, double quotes, or backticks.
// let Name: string = 'Ali Omar'; // single quotes
// let greeting: string = "Hey"; // double quotes

// console.log(Name, greeting);

// let message: string = `Hello, ${Name}!`; // backticks
// console.log(message);


// //boolean: Used for true or false values (1 or 0).
// let isActive: boolean = true; // true
// let isDisabled: boolean = false; // false

// console.log(isActive, isDisabled);

// //Array: Used for arrays of values of any type.
// // Array for numbers
// let numbers: number []= [1, 2, 3]; 
// let listOne: number[] = [1, 2, 3]; // same as above
// let listTwo: Array<number> = [1, 2, 3];// same as above

// console.log(numbers, listOne, listTwo);

// // Array for strings
// let names: string[] = ['Ali', 'Omar', 'Abdi'];
// let listThree: Array<string> = ['Ali', 'Omar', 'Abdi']; // same as above

// console.log(names, listThree);

// // Tupe: Used for fixed-length arrays with elements of specified types.
// let x:[string, number] ; 
// x = ["Hello", 10]; //  [string, number] OK
// // x = [10, "hello"]; // Error

// console.log(x);

// //enum: Used for creating named constants.
// enum Color {Red, Green, Blue};
// let c: Color = Color.Red;

// // enum Users {Adim, User, Guest};
// // let u: Users = Users.User;

// console.log(c);

// //Any: Used for values of any type.
// let notSure: any = 6;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean

// console.log(notSure);

// //void: Used for functions that don't return a value.
// function warnUser(): void {
//     console.log("This is my warning message");
// }


// function logMessage(message: string): void {
//     console.log(message);
// }

// // null and undefined: Special types that have only one value each (null and undefined).
// let u: undefined = undefined;
// let n: null = null;

// console.log(u, n);

// Functions  in typescript 
// Named function: Used for defining a function before it's used.

function add(x: number, y: number): number {
  return x + y;
}
console.log(add(10, 20)); // returns 30


// Anonymous function: Used for defining a function after it's used.

let myAdd = function (x: number, y: number): number {
  return x + y;
};
console.log(myAdd(10, 20)); // returns 30

// Optional parameter: Used for specifying that a parameter is optional.

function personInfo(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
console.log(personInfo("Ali ", "Omar")) // returns 'Ali 'Omar'

// Default parameter: Used for initializing a parameter with a default value.

function buildName(firstName: string, lastName = "Key") {
  return firstName + " " + lastName;
}

let result = buildName("Ali"); // returns 'Ali Key'
console.log(result);

// Rest parameter: Used for representing an indefinite number of arguments as an array.

function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName2("Ali", "Omar", "Abdi");
console.log(employeeName);

// Function overloads: Used for defining multiple function types for the same function.

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") return Number(x.toString().split("").reverse().join(""));
  else return x.split("").reverse().join("");
}

console.log(reverse(123));
console.log(reverse("Hello"));








