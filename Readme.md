#### Basic Types in TypeScript
TypeScript includes several basic types which allow developers to specify and validate the data types they expect:

- **`number`**: For numerical values.
- **`string`**: For textual data.
- **`boolean`**: For true/false values.
- **`array`**: For arrays of other types.
- **`tuple`**: For fixed-length arrays with specified types.
- **`enum`**: For enumerated values.
- **`any`**: For unknown or dynamic types.
- **`void`**: For functions that don't return a value.
- **`null`** and **`undefined`**: For values that are null or undefined.



### Topic 2: Deep Dive into Basic Types

#### 1. `number`

- Used for integers and floating-point numbers.
  
  **Example:**
  ```typescript
  let age: number = 20; // integer number
  let price: number = 9.99; // floating-point number
  
  

  let binary: number = 0b1010; // binary number
  let decimal: number = 6; // decimal number
  let octal: number = 0o744; // octal number
  let hex: number = 0xf00d; // hexadecimal number
 
  ```

#### 2. `string`

-   tring : Used for text. It must be enclosed within single quotes, double quotes, or backticks..
  
  **Example:**
  ```typescript
  let name: string = "Ali Omar";  // double quote
  let greeting: string = `Hello, my name is ${name}`; // backticks

  ```

#### 3. `boolean`

- Used for true or false values (1 or 0).
  
  **Example:**
  ```typescript
  let isActive: boolean = true; // true
  let isDisabled: boolean = false; // false

#### 4. `array`

- Used for arrays of other types. 
  
  **Example:**
  ```typescript

  let numbers: number []= [1, 2, 3]; 
  let listOne: number[] = [1, 2, 3]; // same as above
  let listTwo: Array<number> = [1, 2, 3];// same as above

  
  let names: string[] = ['Ali', 'Omar', 'Abdi'];
  let listThree: Array<string> = ['Ali', 'Omar', 'Abdi']; // same as above
  ```

#### 5. `tuple`

- Used for fixed-length arrays with elements of specified types.
  
  **Example:**
  ```typescript
  let x:[string, number] ; 
  x = ["Hello", 10]; //  [string, number] OK
  // x = [10, "hello"]; // Error
  ```

#### 6. `enum`

- Used for creating named constants.
  
  **Example:**
  ```typescript
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;
  
  enum Users {Adim, User, Guest};
  let u: Users = Users.User;
  ```

#### 7. `any`

- Used when the type is unknown or dynamic.
  
  **Example:**
  ```typescript
  let notSure: any = 6;
  notSure = "maybe a string instead";
  notSure = false;
  ```

#### 8. `void`

- Commonly used as the return type of functions that do not return a value.
  
  **Example:**
  ```typescript
    function warnUser(): void {
    console.log("This is my warning message");
    }

    function logMessage(message: string): void {
    console.log(message);
    }

  ```

#### 9. `null` and `undefined`

- Special types that have only one value each (`null` and `undefined`).
  
  **Example:**
  ```typescript
  let u: undefined = undefined;
  let n: null = null;
  ```