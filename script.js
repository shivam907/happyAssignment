"use strict";
console.log("Hloo");
alert("Welcome to my first JavaScript program in COMP1223");

const firstName = prompt("Please enter your first name.");

const lastName = prompt("Please enter your last name.");

const programName = prompt(
  "Please enter your program name.",
  "Computer System Analyst"
);

const yearOfStudy = prompt("Please enter your year of study.", "1");

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
