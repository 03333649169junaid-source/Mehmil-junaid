// 1. Age alert
let age = 15;
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
let birthYear = 2008; // apna saal likh do
document.write("My birth year is " + birthYear);
document.write("<br>Data type of my declared variable is " + typeof birthYear);