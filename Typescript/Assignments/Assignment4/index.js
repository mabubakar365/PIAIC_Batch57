"use strict";
// 1. Hello Variable
// Declare a variable named 'greeting' of type string and assign the value "Hello, World!" to it.
let greeting = "Hello, World!";
// Use the console.log function to print the value of the 'greeting' variable to the console.
console.log(greeting);
// 2. Basic Math
// Declare two variables 'num1' and 'num2' of type number and assign the values 10 and 5 to them respectively.
let num1 = 10, num2 = 5;
// Use the console.log function to print the sum of 'num1' and 'num2' to the console.
console.log(`Sum: ${num1 + num2}`);
// Use the console.log function to print the difference of 'num1' and 'num2' to the console.
console.log(`Difference: ${num1 - num2}`);
// Use the console.log function to print the product of 'num1' and 'num2' to the console.
console.log(`Product: ${num1 * num2}`);
// Use the console.log function to print the quotient of 'num1' divided by 'num2' to the console.
console.log(`Quotient ${num1 / num2}`);
// 3. Swapping Values
// Declare two variables 'a' and 'b' of type number and assign the values 1 and 2 to them respectively.
let a = 1, b = 2;
// Swap the values of 'a' and 'b' using array destructuring.
[a, b] = [b, a];
// Use the console.log function to print the values of 'a' and 'b' to the console.
console.log(`a: ${a}, b: ${b}`);
// 4. Type Annotation (TypeScript)
// Declare a variable 'message' of type string and assign the string "Hello, Typescript!" to it.
let message = "Hello, Typescript!";
// Try to assign a number to 'message'. This will result in a compile-time error because 'message' is of type string, not number.
// message = 123;  // Error: Type '123' is not assignable to type 'string'.
// Use the console.log function to print the value of 'message' to the console.
// console.log(message);
// 5. Modulus Operator
// Declare a variable 'num1' and assign the value 10 to it.
num1 = 10;
// Declare a variable 'num2' and assign the value 3 to it.
num2 = 3;
// Use the console.log function to print the remainder of 'num1' divided by 'num2' to the console.
console.log(`Remainder: ${num1 % num2}`);
// 6. Increment Challenge
// Declare a variable 'counter' of type number and initialize it to 0.
let counter = 0;
// Increment the value of 'counter' by 1.
counter++;
// Print the value of 'counter' to the console.
console.log(`Counter: ${counter}`);
// Increment the value of 'counter' by 1 again.
++counter;
// Print the updated value of 'counter' to the console.
console.log(`Counter: ${counter}`);
// 7. Logical Gates
// Declare three boolean variables 'a', 'b', and 'c', and assign the values true, false, and true to them respectively.
let a1 = true;
let b1 = false;
let c = true;
// Use the console.log function to print the result of the logical AND operation between 'a', 'b', and 'c' to the console.
console.log(`AND: ${a1 && b1 && c}`);
// Use the console.log function to print the result of the logical OR operation between 'a', 'b', and 'c' to the console.
console.log(`OR: ${a1 || b1 || c}`);
// Use the console.log function to print the result of the logical NOT operation on 'a' to the console.
console.log(`NOT: ${!a1}`);
// Use the console.log function to print the result of the logical NOT operation on 'b' to the console.
console.log(`NOT: ${!b1}`);
// Use the console.log function to print the result of the logical NOT operation on 'c' to the console.
console.log(`NOT: ${!c}`);
// 8. Compound Assignment
// Declare a variable 'num' of type number and assign the value 10 to it.
let num = 10;
// Use the '+=' operator to add 1 to 'num' and assign the result back to 'num'. Then, print the updated value of 'num' to the console.
console.log(`+=: ${num += 1}`);
// Use the '-=' operator to subtract 1 from 'num' and assign the result back to 'num'. Then, print the updated value of 'num' to the console.
console.log(`-=: ${num -= 1}`);
// Use the '*=' operator to multiply 'num' by 1 and assign the result back to 'num'. Then, print the updated value of 'num' to the console.
console.log(`*=: ${num *= 1}`);
// Use the '/=' operator to divide 'num' by 1 and assign the result back to 'num'. Then, print the updated value of 'num' to the console.
console.log(`/=: ${num /= 1}`);
// 9. Even or Odd
// Declare a variable 'numb' of type number and assign the value 10 to it.
let numb = 10;
// Use an if-else statement to check if 'numb' is even or odd.
if (numb % 2 === 0) {
    // If 'numb' is even (i.e., if the remainder of 'numb' divided by 2 is 0), print "Even" to the console.
    console.log("Even");
}
else {
    // If 'numb' is odd (i.e., if the remainder of 'numb' divided by 2 is not 0), print "Odd" to the console.
    console.log("Odd");
}
// 10. Voting Eligibility
// Declare a variable 'age' of type number and assign the value 20 to it.
let age = 20;
// Use an if-else statement to check if 'age' is greater than or equal to 18.
if (age >= 18) {
    // If 'age' is greater than or equal to 18, print "Eligible to vote" to the console.
    console.log("Eligible to vote");
}
else {
    // If 'age' is less than 18, print "Not eligible to vote" to the console.
    console.log("Not eligible to vote");
}
// 11. Grading System
// Declare a variable 'score' of type number and assign the value 85 to it.
let score = 85;
// Use an if-else if-else statement to determine the grade based on the value of 'score'.
if (score >= 90) {
    // If 'score' is greater than or equal to 90, print "Grade: A" to the console.
    console.log("Grade: A");
}
else if (score >= 80) {
    // If 'score' is less than 90 but greater than or equal to 80, print "Grade: B" to the console.
    console.log("Grade: B");
}
else if (score >= 70) {
    // If 'score' is less than 80 but greater than or equal to 70, print "Grade: C" to the console.
    console.log("Grade: C");
}
else if (score >= 60) {
    // If 'score' is less than 70 but greater than or equal to 60, print "Grade: D" to the console.
    console.log("Grade: D");
}
else {
    // If 'score' is less than 60, print "Grade: F" to the console.
    console.log("Grade: F");
}
// 12. Max of Three
// Declare three variables 'x', 'y', and 'z' of type number and assign the values 10, 20, and 15 to them respectively.
let x = 10, y = 20, z = 15;
// Use the Math.max function to find the maximum value among 'x', 'y', and 'z'. Then, print this maximum value to the console.
console.log(`Max: ${Math.max(x, y, z)}`);
// 13. Leap Year Checker
// Declare a variable 'year' of type number and assign the value 2020 to it.
let year = 2020;
// Use an if-else statement to check if 'year' is a leap year.
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // If 'year' is divisible by 4 and not divisible by 100, or if 'year' is divisible by 400, then it's a leap year.
    // In this case, print "<year> is a leap year" to the console.
    console.log(`${year} is a leap year`);
}
else {
    // If 'year' does not meet the above conditions, then it's not a leap year.
    // In this case, print "<year> is not a leap year" to the console.
    console.log(`${year} is not a leap year`);
}
// 14. Fahrenheit to Celsius Converter
// Declare a variable 'fahrenheit' of type number and assign the value 100 to it.
let fahrenheit = 100;
// Calculate the equivalent temperature in Celsius using the formula (Fahrenheit - 32) * 5/9.
let celcius = (fahrenheit - 32) * (5 / 9);
// Use the console.log function to print the calculated Celsius temperature to the console.
console.log(`Celcius: ${celcius}`);
// 15. Positive, Negative, or Zero
// Declare a variable 'number' of type number and assign the value 10 to it.
let number = 10;
// Use an if-else if-else statement to check if 'number' is positive, negative, or zero.
if (number > 0) {
    // If 'number' is greater than 0, print "Positive" to the console.
    console.log("Positive");
}
else if (number < 0) {
    // If 'number' is less than 0, print "Negative" to the console.
    console.log(number + " is Negative");
}
else {
    // If 'number' is equal to 0, print "Zero" to the console.
    console.log("Zero");
}
// 16. Multiplication Table
// Declare a variable 'num1' of type number and assign the value 5 to it.
num1 = 5;
// Use a for loop to iterate from 1 to 10.
for (let i = 1; i <= 10; i++) {
    // For each iteration, calculate the product of 'num1' and 'i', and print the result to the console.
    // This effectively prints the multiplication table of 'num1' from 1 to 10.
    console.log(`${num1} * ${i} = ${num1 * i}`);
}
