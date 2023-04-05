"use strict";
console.log("Hloo");
alert("Welcome to my first JavaScript program in COMP1223");
function hasNumber(myString) {
  return /\d/.test(myString);
}
let firstName = "",
  lastName = "",
  programName = "",
  yearOfStudy = 0;
while (firstName.length <= 0 || hasNumber(firstName)) {
  firstName = prompt("Please enter your first name.");
}
while (lastName.length <= 0 || hasNumber(lastName)) {
  lastName = prompt("Please enter your last name.");
}

while (programName.length <= 0 || hasNumber(programName)) {
  programName = prompt(
    "Please enter your program name.",
    "Computer System Analyst"
  );
}
let a = true;
while (a) {
  yearOfStudy = prompt("Please enter your year of study.", "1");
  if (
    yearOfStudy == "1" ||
    yearOfStudy == "2" ||
    yearOfStudy == "3" ||
    yearOfStudy == "4"
  ) {
    a = false;
    break;
  }
}
console.log(hasNumber(firstName));

const fullNameSelector = document.getElementById("fullName");
const programNameSelector = document.getElementById("programName");
const yearOfSTudySelector = document.getElementById("yearOfStudy");

fullNameSelector.textContent = firstName + " " + lastName;
programNameSelector.textContent = programName;
yearOfSTudySelector.textContent = yearOfStudy;

// document.querySelector(".logo").addEventListener("click", () => {
//   window.location.href = "https://shivamkaushal.in";
// });
// document.querySelector(".logo1").addEventListener("click", () => {
//   window.location.href = "https://shivamkaushal.in";
// });
