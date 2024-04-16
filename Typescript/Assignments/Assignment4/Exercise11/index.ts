// 11. Grading System

// Declare a variable 'score' of type number and assign the value 85 to it.
let score: number = 85;

// Use an if-else if-else statement to determine the grade based on the value of 'score'.
if(score >= 90) {
    // If 'score' is greater than or equal to 90, print "Grade: A" to the console.
    console.log("Grade: A");
}
else if(score >= 80) {
    // If 'score' is less than 90 but greater than or equal to 80, print "Grade: B" to the console.
    console.log("Grade: B");
}
else if(score >= 70) {
    // If 'score' is less than 80 but greater than or equal to 70, print "Grade: C" to the console.
    console.log("Grade: C");
}
else if(score >= 60) {
    // If 'score' is less than 70 but greater than or equal to 60, print "Grade: D" to the console.
    console.log("Grade: D");
}
else {
    // If 'score' is less than 60, print "Grade: F" to the console.
    console.log("Grade: F");
}