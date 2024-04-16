// 13. Leap Year Checker

// Declare a variable 'year' of type number and assign the value 2020 to it.
let year: number = 2020;

// Use an if-else statement to check if 'year' is a leap year.
if((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
    // If 'year' is divisible by 4 and not divisible by 100, or if 'year' is divisible by 400, then it's a leap year.
    // In this case, print "<year> is a leap year" to the console.
    console.log(`${year} is a leap year`);
}
else {
    // If 'year' does not meet the above conditions, then it's not a leap year.
    // In this case, print "<year> is not a leap year" to the console.
    console.log(`${year} is not a leap year`);
}