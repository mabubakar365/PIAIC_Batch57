"use strict";
// 4. Type Annotation (TypeScript)
// Declare a variable 'message' of type string and assign the string "Hello, Typescript!" to it.
let message = "Hello, Typescript!";
// Try to assign a number to 'message'. This will result in a compile-time error because 'message' is of type string, not number.
message = 123; // Error: Type '123' is not assignable to type 'string'.
// Use the console.log function to print the value of 'message' to the console.
console.log(message);
