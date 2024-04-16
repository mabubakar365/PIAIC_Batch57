// 1. Hello Variable
let greeting: string = "Hello, World!"; 
console.log(greeting);

// 2. Basic Math
let num1: number = 10, num2: number = 5;
console.log(`Sum: ${num1+num2}`);
console.log(`Difference: ${num1-num2}`);
console.log(`Product: ${num1*num2}`);
console.log(`Quotient ${num1/num2}`);

// 3. Swapping Values
let a: number = 1, b: number = 2;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`);

// 4. Type Annotation (TypeScript)
let message: string = "Hello, Typescript!";
message = 123;
console.log(message); 

// 5. Modulus Operator
num1 = 10;
num2 = 3;
console.log(`Remainder: ${num1%num2}`);

// 6. Increment Challenge
let counter: number = 0;
counter++;
console.log(`Counter: ${counter}`);
++counter;
console.log(`Counter: ${counter}`);

// 7. Logical Gates
let a1: boolean = true, b1: boolean = false, c: boolean = true;
console.log(`AND: ${a1 && b1 && c}`);
console.log(`OR: ${a1 || b1 || c}`);
console.log(`NOT: ${!a1}`);
console.log(`NOT: ${!b1}`);
console.log(`NOT: ${!c}`);

// 8. Compound Assignment
let num: number = 10;
console.log(`+=: ${num+=1}`);
console.log(`-=: ${num-=1}`);
console.log(`*=: ${num*=1}`);
console.log(`/=: ${num/=1}`);

// 9. Even or Odd
let numb: number = 10;
if(numb % 2 === 0) {
    console.log("Even");
}

else {
    console.log("Odd");
}

// 10. Voting Eligibility
let age: number = 20;
if(age >= 18) {
    console.log("Eligible to vote");
}

else {
    console.log("Not eligible to vote");
}

// 11. Grading System
let score: number = 85;
if(score >= 90) {
    console.log("Grade: A");
}

else if(score >= 80) {
    console.log("Grade: B");
}

else if(score >= 70) {
    console.log("Grade: C");
}

else if(score >= 60) {
    console.log("Grade: D");
}

else {
    console.log("Grade: F");
}

// 12. Max of Three
let x: number = 10, y: number = 20, z: number = 15;
console.log(`Max: ${Math.max(x,y,z)}`);

// 13. Leap Year Checker
let year: number = 2020;
if((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
}

else {
    console.log(`${year} is not a leap year`);
}

// 14. Fahrenheit to Celsius Converter
let fahrenheit: number = 100;
let celcius = (fahrenheit-32) * (5/9);
console.log(`Celcius: ${celcius}`);

// 15. Positive, Negative, or Zero
let number: number = 10;
if(number > 0) {
    console.log("Positive");
} 

else if(number < 0) {
    console.log(number + "Negative");
}

else {
    console.log("Zero")
}

// 16. Multiplication Table
let num3: number = 5;
for(let i = 1; i <= 10; i++) {
    console.log(`${num3} * ${i} = ${num3*i}`);
}