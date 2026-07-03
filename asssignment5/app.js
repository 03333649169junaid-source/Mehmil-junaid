//question1
//var city =prompt("Enter city name:");

//if(city === "Karachi"){
    //alert("Welcome to city of lights");
//}
//question2
//var gender = prompt("Enter your gender:male or female");

//if(gender.toLowerCase() === "male"){
    //alert("Good Morning Sir");
//}else if (gender.toLowerCase() ==="female"){
    //alert("Good Morning Ma'am");
//}
//question3
//var color = prompt("Enter traffic signal color: Red' Yellow or Green");

//if(color.toLowerCase() === "red"){
    //alert("Must Stop");
//}else if (color.toLowerCase() === "Yellow"){
    //alert("Ready to move");
//}else if (color.toLowerCase() === "green"){
    //alert("Move now")
//}else{
    //alert("Inavalid color");
//}
//question4
//var petrol = +prompt("Enter remaining fuel in litres:");

//if(petrol <0.25) {
    //alert("Please refill the fuel in your car");
//}
//question5
// a.
//var a = 4;
//if (++a === 5){ 
  //alert("given condition for variable a is true"); 
//}

// b.
//var b = 82;
//if (b++ === 83){
  //alert("given condition for variable b is true");
//}

// c.
//var c = 12;
//if (c++ === 13){
  //alert("condition 1 is true");
//}
//if (c === 13){
  //alert("condition 2 is true");
//}
//if (++c < 14){
  //alert("condition 3 is true");
//}
//if(c === 14){
  //alert("condition 4 is true");
//}

// d.
//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
  //alert("The cost equals");
//}

// e.
//if (true){
  //alert("True");
//}
//if (false){
  //alert("False");
//}

// f.
//if("car" < "cat"){
  //alert("car is smaller than cat");
//}
//question6
//var sub1 = +prompt("Enter marks for subject 1:");
//var sub2 = +prompt("Enter marks for subject 2:");
//var sub3 = +prompt("Enter marks for subject 3:");
//var totalMarks = 300;

//var obtained = sub1 + sub2 + sub3;
//var percentage = (obtained / totalMarks) * 100;

//alert("Total Marks: " + totalMarks);
//alert("Marks Obtained: " + obtained);
//alert("Percentage: " + percentage + "%");
//question7
//if (percentage >= 80) {
  //alert("Grade: A-one \nRemarks: Excellent");
//} else if (percentage >= 70) {
 // alert("Grade: A \nRemarks: Good");
//} else if (percentage >= 60) {
  //alert("Grade: B \nRemarks: You need to improve");
//} else {
  //alert("Grade: Fail \nRemarks: Sorry");
//}
//question8
//var secretNumber = 7;
//var guess = +prompt("Guess the secret number from 1 to 10:");

//if (guess === secretNumber) {
  //alert("Bingo! Correct answer");
//} else if (guess === secretNumber + 1) {
  //alert("Close enough to the correct answer");
//} else {
  //alert("Try again");
//}
//question9
//var num = +prompt("Enter a number:");

//if (num % 3 === 0) {
  //alert(num + " is divisible by 3");
//} else {
  //alert(num + " is not divisible by 3");
//}
//question10
//var num = +prompt("Enter a number:");

//if (num % 2 === 0) {
  //alert(num + " is an Even number");
//} else {
  //alert(num + " is an Odd number");
//}
//question11
//var temp = +prompt("Enter the temperature:");

//if (temp > 40) {
  //alert("It is too hot outside.");
//} else if (temp > 30) {
  //alert("The Weather today is Normal.");
//} else if (temp > 20) {
  //alert("Today's Weather is cool.");
//} else if (temp > 10) {
  //alert("OMG! Today's weather is so Cool.");
//}

//var num1 = +prompt("Enter first number:");
//var operator = prompt("Enter operator: + - * / %");
//var num2 = +prompt("Enter second number:");
//var result;

//if (operator === "+") {
  //result = num1 + num2;
//} else if (operator === "-") {
  //result = num1 - num2;
//} else if (operator === "*") {
  //result = num1 * num2;
//} else if (operator === "/") {
  //result = num1 / num2;
//} else if (operator === "%") {
  //result = num1 % num2;
//} else {
 // alert("Invalid operator");
//}

//if (result !== undefined) {
  //alert("Result: " + num1 + " + operator + " + num2 + " = " + result);
//}

//var ch = prompt("Enter a character:");

//f (ch >= "0" && ch <= "9") {
  //alert("Number");
//} else if (ch >= "A" && ch <= "Z") {
  //alert("Uppercase letter");
//} else if (ch >= "a" && ch <= "z") {
  //alert("Lowercase letter");
//}

//var num1 = +prompt("Enter first integer:");
//var num2 = +prompt("Enter second integer:");

//if (num1 > num2) {
  //alert(num1 + " is larger");
//} else if (num2 > num1) {
 // alert(num2 + " is larger");
//} else {
 // alert("Both integers are equal");
//}

//var num = +prompt("Enter a number:");

//if (num > 0) {
  //alert("The number is Positive");
//} else if (num < 0) {
  //alert("The number is Negative");
//} else {
  //alert("The number is Zero");
//}

//var ch = prompt("Enter a character:");
//ch = ch.toLowerCase();

//if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
  //alert("true");
//} else {
  //alert("false");
//}

//var correctPassword = "pakistan123";
//var userPassword = prompt("Enter your password:");

//if (userPassword === "") {
  //alert("Please enter your password");
//} else if (userPassword === correctPassword) {
  //alert("Correct! The password you entered matches the original password");
//} else {
  //alert("Incorrect password");
//}

//var greeting;
//var hour = 13;

//if (hour < 18) {
  //greeting = "Good day";
//} else {
  //greeting = "Good evening";
//}

//alert(greeting);

//var time = +prompt("Enter time in 24-hour format, like 1900 for 7pm:");

//if (time >= 0 && time < 1200) {
  //alert(time + " = " + time/100 + " am");
//} else if (time >= 1200 && time < 2400) {
  //alert(time + " = " + (time/100 - 12) + " pm");
//} else {
  //alert("Invalid time");
//}

