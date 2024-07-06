// * Question 1:
// * Add a list of radio buttons on the page containing different color options. When a user clicks on one of them, the background of the page should change to the selected color.
// * - Two of the buttons that say "Night mode" and "Sunny Mode". When night mode is chosen, the background should change to black and the texts should change to white. When Sunny mode is chosen, the background should change to light blue and texts should be in black.

let themeColor = document.getElementById("themeChoice");
themeColor.addEventListener("click", handleTheme);
function handleTheme(e) {
	let choice = e.target;
	let selectedValue = choice.value;
	console.log(selectedValue);
	switch (selectedValue) {
		case "blue":
			document.body.style.backgroundColor = "#5ab5ff";
			document.body.style.color = "#000";
			break;
		case "green":
			document.body.style.backgroundColor = "#03c4a1";
			document.body.style.color = "#000";
			break;
		case "purple":
			document.body.style.backgroundColor = "#c300ff";
			document.body.style.color = "#000";
			break;
		case "sunny":
			document.body.style.backgroundColor = "#FFEB3B";
			document.body.style.color = "#000";
			break;
		case "nightmode":
			document.body.style.backgroundColor = "#000";
			document.body.style.color = "#fff";
			break;
	}
}

//* Question 2

//* create a two functions for each buttons to increase and decrease the value in the middle
//* note: the number shouldn't go below 0 and above 20

let num = parseFloat(document.getElementById("result").textContent);

function adder(e) {
	e.preventDefault();
	
	if (num < 20) {
		num += 1;
	}

	document.getElementById("result").textContent = num;
}

function minus(e) {
	e.preventDefault();

	if (num > 0) {
		num -= 1;
	}
	document.getElementById("result").textContent = num;
}

document.getElementById("plus").onclick = adder;
document.getElementById("minus").onclick = minus;

//* Question 3

//* Validate the Login form

//* Change the background of the input boxes to pink if a user tries to submit empty form for each input box and if all the values are all fulfilled show a message saying  "Form submitted" and hide the form upon displaying message.

document.getElementById("form").onsubmit = formSubmit;

function formSubmit(e) {
	e.preventDefault();
	// console.log(e.target);
	let userName = document.querySelector("#form input[name=user-name]");
	let password = document.querySelector("#form input[name=password]");
	if (userName.value === "") {
		userName.style.background = "pink";
	}
	if (password.value === "") {
		password.style.background = "pink";
	}
	if (userName.value !== "" && password.value !== "") {
		userName.style.background = "";
		password.style.background = "";
		let span = document.getElementById("span")
		let form = document.getElementById("form")
		form.style.display="none"
		span.innerText="submitted....Thank you!!!"
		// alert("Form Submitted");
	}
}

//  other demonestration 

let  d= document.querySelector("#book h2")
console.log(d.childNodes)

// let h22 = document.querySelector('#book-list').nextElementSibling
// let h32 = document.querySelector('#book-list').nextSibling  //text
// console.log(h22)
// console.log(h32)

// console.log(document.getElementsByName("abe"));


// h22.innerHTML="<h2>new one</h2>"
// 


// email validation
function validateEmail(email) {
	email = email || "";
	let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
	return re.test(email.toLowerCase().trim());
  };
  
  validateEmail("test@yahoo.com"); // true
  validateEmail("foo"); // false


               