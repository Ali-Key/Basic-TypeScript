// number : Used for integers and floating-point numbers.
let age: number = 20; // integer number
let price: number = 9.99; // floating-point number

console.log(age )


let binary: number = 0b1010; // binary number
let decimal: number = 6; // decimal number
let octal: number = 0o744; // octal number
let hex: number = 0xf00d; // hexadecimal number

console.log(binary);


// String : Used for text. It must be enclosed within single quotes, double quotes, or backticks.
let Name: string = 'Ali Omar'; // single quotes
let greeting: string = "Hey"; // double quotes

console.log(Name, greeting);

let message: string = `Hello, ${Name}!`; // backticks
console.log(message);


//boolean: Used for true or false values (1 or 0).
let isActive: boolean = true; // true
let isDisabled: boolean = false; // false

console.log(isActive, isDisabled);

//Array: Used for arrays of values of any type.
// Array for numbers
let numbers: number []= [1, 2, 3]; 
let listOne: number[] = [1, 2, 3]; // same as above
let listTwo: Array<number> = [1, 2, 3];// same as above

console.log(numbers, listOne, listTwo);

// Array for strings
let names: string[] = ['Ali', 'Omar', 'Abdi'];
let listThree: Array<string> = ['Ali', 'Omar', 'Abdi']; // same as above

console.log(names, listThree);

// Tupe: Used for fixed-length arrays with elements of specified types.
let x:[string, number] ; 
x = ["Hello", 10]; //  [string, number] OK
// x = [10, "hello"]; // Error

console.log(x);

//enum: Used for creating named constants.
enum Color {Red, Green, Blue};
let c: Color = Color.Red;

enum Users {Adim, User, Guest};
let u: Users = Users.User;

console.log(c, u);

//Any: Used for values of any type.
let notSure: any = 6;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

console.log(notSure);

//void: Used for functions that don't return a value.
function warnUser(): void {
    console.log("This is my warning message");
}


function logMessage(message: string): void {
    console.log(message);
}

// null and undefined: Special types that have only one value each (null and undefined).
let u: undefined = undefined;
let n: null = null;





