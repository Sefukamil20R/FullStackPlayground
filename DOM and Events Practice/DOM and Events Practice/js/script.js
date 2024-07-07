// Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
// 1.1 Select the element with an id of "sample1".
// 1.2 Print the element itself on the console upon page refresh.
// 1.3 Print the content of the element on the console upon page refresh.
// Hint: Use the "textContent" property to select the content

let sample = document.getElementById("sample1");
console.log(sample);
console.log(sample.textContent);

// Question 2: The following questions are based on the HTML code found under the
// section labeled "For question 2".
// 2.1 Select the element with an ID of "techCompanies" and display it on your
// console. (Do not use "querySelector" for this question)
// 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and
// display it on your console.
// 2.3 How many tech companies are listed under the ul element with an id of
// "techCompanies"? Use "querySelectorAll" to count the total
// 2.4 Select all elements with a class name of "red" and display them on the console.
// Use both "querySelectorAll" and "getElementByClass"
// 2.5 Create a new li HTML element with a content of "Facebook" and display it on
// console
// 2.6 Give the newly created element a class of "blue" using JavaScript
// 2.7 Append the newly created element next to the the "Sony" li element
// 2.8 How many of the tech companies are labeled blue? Find the result using
// JavaScript and display the result inside the "blueCompanies" div.

let tech = document.getElementById("techCompanies");
console.log(tech);
let tech1 = document.querySelector("#techCompanies");
let techtotal = document.querySelectorAll("#techCompanies li");
console.log(techtotal.length);
console.log(techtotal);
let reds = document.querySelectorAll(".red");
let redss = document.getElementsByClassName("red");
console.log(reds);
console.log(redss);
let newEl = document.createElement("li");
newEl.classList.add("blue");
newEl.textContent = "facebook";
console.log(newEl);
let toappend = document.querySelector("#techCompanies li.blue:last-of-type");
toappend.insertAdjacentElement("afterend", newEl);
let bluetotal = document.querySelectorAll("#techCompanies .blue").length;
let display = document.createTextNode("total blue companies are :" + bluetotal);
let divv = document.getElementById("blueCompanies");
divv.appendChild(display);

// Question 3:
// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No"
// Hint: First, write two functions to alter the backgroundColor of the page. One to add a
// background color, another to remove. Then, select the "yesBackground" or
// "noBackground" element and bind the selected element with the click event. Finally,
// attach the function you wrote to alter the background color when the respective element
// is clicked on.

let yesser = document.getElementById("yesBackground");
let nope = document.getElementById("noBackground");
yesser.addEventListener("click", addbackground);
nope.addEventListener("click", removebackground);
function addbackground() {
  document.body.style.backgroundColor = "#99ecff";
}
function removebackground() {
  document.body.style.backgroundColor = "";
}

// Question 4:
// A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form

let submit = document.getElementById("submitButton");
submit.addEventListener("click", checkEntries);
function checkEntries(e) {
  e.preventDefault();
  let first = document.getElementsByName("first-value")[0].value;
  let second = document.getElementsByName("second-value")[0].value;
  let todisplay = document.getElementById("sum");
  let ans = " ";
  if (isNaN(first) || isNaN(second)) {
    ans = "your value is not valid please enter numberical value ";
  } else {
    ans = findsum(first, second);
  }
  todisplay.textContent = ans;
}
function findsum(x, y) {
  let num1 = Number(x);
  let num2 = Number(y);
  let sum = num1 + num2;
  return "the sum of the number is " + sum;
}
