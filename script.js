"use strict";
console.log("Hloo");
alert("Welcome to my first JavaScript program in COMP1223");

let firstName = "",
  lastName = "",
  programName = "",
  yearOfStudy = 0;
while (firstName.length <= 0) {
  firstName = prompt("Please enter your first name.");
}
while (lastName.length <= 0) {
  lastName = prompt("Please enter your last name.");
}

while (programName.length <= 0) {
  programName = prompt(
    "Please enter your program name.",
    "Computer System Analyst"
  );
}

while (yearOfStudy <= 0) {
  yearOfStudy = prompt("Please enter your year of study.", "1");
}

const fullNameSelector = document.getElementById("fullName");
const programNameSelector = document.getElementById("programName");
const yearOfSTudySelector = document.getElementById("yearOfStudy");

fullNameSelector.textContent = firstName + " " + lastName;
programNameSelector.textContent = programName;
yearOfSTudySelector.textContent = yearOfStudy;

document.querySelector(".logo").addEventListener("click", () => {
  window.location.href = "https://shivamkaushal.in";
});
document.querySelector(".logo1").addEventListener("click", () => {
  window.location.href = "https://shivamkaushal.in";
});
