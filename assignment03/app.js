//chapter03
// 1. Age alert
let age = 12;
alert("I am " + age + " years old");

// 2. Visit counter
let visits = localStorage.getItem("visits");
if (visits === null) {
  visits = 1;
} else {
  visits = Number(visits) + 1;
}
localStorage.setItem("visits", visits);
alert("You have visited this site " + visits + " times");

// 3. Birth year
let birthYear = 2013; 
document.write("My birth year is " + birthYear);
document.write("<br>Data type of my declared variable is " + typeof birthYear);
//chapter04
let studentName = "Mehmil Junaid";
let age = 12;              
let _totalMarks = 450;     
let $fee = 5000;
let user1 = "Mehmil Junaid";


alert("Student Name: " + studentName);

document.write("<h2>Student Details - Mehmil Junaid</h2>");
document.write("Name: " + studentName + "<br>");
document.write("Age: " + age + "<br>");
document.write("Total Marks: " + _totalMarks + "<br>");
document.write("Fee: " + $fee + "<br>");
document.write("User ID: " + user1);
//chapter05
//let num1 = 3;
//let num2 = 5;
//let sum = num1 + num2;

//document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

//let num = 5;

//document.write("<br>Initial value: " + num);
//num++;

//document.write("<br>Value after increment is: " + num);

//num = num + 7;

//document.write("<br>Value after addition is: " + num);

//num--;

//document.write("<br>Value after decrement is: " + num);

//let remainder = num % 3;
//document.write("<br>The remainder is: " + remainder);

//let ticketPrice = 600;
//let totalCost = ticketPrice * 5;
//document.write("<br>Cost of one movie ticket is " + ticketPrice + " PKR");
//document.write("<br>Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

//let num = 4;
//document.write("<br><br>Table of " + num);

//document.write("<br>" + num + "x1=" + num*1);
//document.write("<br>" + num + "x2=" + num*2);
//document.write("<br>" + num + "x3=" + num*3);
//document.write("<br>" + num + "x4=" + num*4);
//document.write("<br>" + num + "x5=" + num*5);
//document.write("<br>" + num + "x6=" + num*6);
//document.write("<br>" + num + "x7=" + num*7);
//document.write("<br>" + num + "x8=" + num*8);
//document.write("<br>" + num + "x9=" + num*9);
//document.write("<br>" + num + "x10=" + num*10);

//let celsius = 25;

//let fahrenheit = (celsius * 9/5) + 32;
//document.write("<br><br>" + celsius + "°C is " + fahrenheit + "°F");

//let f = 70;

//let c = (f - 32) * 5/9;
//document.write("<br>" + f + "°F is " + c + "°C");

//let price1 = 650;     // Item 1 price
//let qty1 = 3;         // Item 1 quantity
//let price2 = 100;     // Item 2 price  
//let qty2 = 7;         // Item 2 quantity
//let shipping = 100;   // Shipping charges

//let total1 = price1 * qty1;
//let total2 = price2 * qty2;
//let grandTotal = total1 + total2 + shipping;

//document.write("<br><br><b>Shopping Cart</b>");
//document.write("<br>Price of item 1 is " + price1);
//document.write("<br>Quantity of item 1 is " + qty1);
//document.write("<br>Price of item 2 is " + price2);
//document.write("<br>Quantity of item 2 is " + qty2);
//document.write("<br>Shipping Charges " + shipping);
//document.write("<br><br>Total cost of your order is " + grandTotal);

//let totalMarks = 980;   // Total marks
//let marksObtained = 804; // Obtained marks

//let percentage = (marksObtained / totalMarks) * 100;

//document.write("<br><br><b>Mark Sheet</b>");
//document.write("<br>Total marks: " + totalMarks);
//document.write("<br>Marks obtained: " + marksObtained);
//document.write("<br>Percentage: " + percentage + "%");

//let usd = 10;
//let sar = 25;
//let totalPKR = usd * 104.80 + sar * 28;

//document.write("<br><br><b>Currency in PKR</b>");
//document.write("<br>Total currency in PKR: " + totalPKR);

//let num = 10; 
//let result = (num + 5) * 10 / 2;

//document.write("<br><br><b>Q10: Single Expression</b>");
//document.write("<br>Result: " + result);

//let currentYear = 2026;
//let birthYear = 2013;

//let age1 = currentYear - birthYear;
//let age2 = age1 - 1;

//document.write("<br><br><b>Q11: Age Calculator</b>");
//document.write("<br>They are either " + age1 + " or " + age2 + " years old");

//let radius = 5; 
//let pi = 3.142; 

//let circumference = 2 * pi * radius;
//let area = pi * radius * radius;

//document.write("<br><br><b>Q12: The Geometrizer</b>");
//document.write("<br>Radius: " + radius);
//document.write("<br>The circumference is " + circumference);
//document.write("<br>The area is " + area);

let snack = "chocolate chip";
let currentAge = 15;
let maxAge = 65;
let perDay = 3;

let yearsLeft = maxAge - currentAge;
let totalNeeded = yearsLeft * 365 * perDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snack: " + snack);
document.write("<br>Current age: " + currentAge);
document.write("<br>Estimated Maximum Age: " + maxAge);
document.write("<br>Amount of snacks per day: " + perDay);
document.write(`<br>You will need ${totalNeeded} ${snack} to last you until the ripe old age of ${maxAge}.`);