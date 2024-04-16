"use strict";
// 1. Hello Variable
let greeting = "Hello, World!";
console.log(greeting);
// 2. Basic Math
let num1 = 10, num2 = 5;
console.log(`Sum: ${num1 + num2}`);
console.log(`Difference: ${num1 - num2}`);
console.log(`Product: ${num1 * num2}`);
console.log(`Quotient ${num1 / num2}`);
// 3. Swapping Values
let a = 1, b = 2;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`);
// 4. Type Annotation (TypeScript)
let message = "Hello, Typescript!";
message = 123;
console.log(message);
// 5. Modulus Operator
num1 = 10;
num2 = 3;
console.log(`Remainder: ${num1 % num2}`);
// 6. Increment Challenge
let counter = 0;
counter++;
console.log(`Counter: ${counter}`);
++counter;
console.log(`Counter: ${counter}`);
// 7. Logical Gates
let a1 = true, b1 = false, c = true;
console.log(`AND: ${a1 && b1 && c}`);
console.log(`OR: ${a1 || b1 || c}`);
console.log(`NOT: ${!a1}`);
console.log(`NOT: ${!b1}`);
console.log(`NOT: ${!c}`);
// 8. Compound Assignment
let num = 10;
console.log(`+=: ${num += 1}`);
console.log(`-=: ${num -= 1}`);
console.log(`*=: ${num *= 1}`);
console.log(`/=: ${num /= 1}`);
// 9. Even or Odd
let numb = 10;
if (numb % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
// 10. Voting Eligibility
let age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
}
// 11. Grading System
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else if (score >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}
// 12. Max of Three
let x = 10, y = 20, z = 15;
console.log(`Max: ${Math.max(x, y, z)}`);
// 13. Leap Year Checker
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}
// 14. Fahrenheit to Celsius Converter
let fahrenheit = 100;
let celcius = (fahrenheit - 32) * (5 / 9);
console.log(`Celcius: ${celcius}`);
// 15. Positive, Negative, or Zero
let number = 10;
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log(number + "Negative");
}
else {
    console.log("Zero");
}
// 16. Multiplication Table
let num3 = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num3} * ${i} = ${num3 * i}`);
}
