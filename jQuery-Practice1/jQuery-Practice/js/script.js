console.log("testing..");
// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".
// 1.1. Select the element with an id of "sample1" using jQuery.
// 1.2. Print the element itself on the console upon page refresh.
// 1.3. Print the content of the element on the console upon page refresh. Use jQuery to
// select the content of the element

$(document).ready(function() {
    // Selecting the element
    var sample1Element =$("#sample1");

    if (sample1Element) {
        // If the element exists, print the element itself on the console
        console.log(sample1Element);
        
        // Print the content of the element on the console
        console.log(sample1Element.text());
    } else {
        // If the element does not exist, printing error message
        console.error("Element with ID 'sample1' not found.");
    }
});


// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.
// 2.2. How many tech companies are listed under the ul element with an id of
// "techCompanies"?
// 2.3. Select all elements with a class of "red" and display them on the console.
// 2.4. Create a new li HTML element with a content of "Facebook" and display it on console
// 2.5. Give the newly created element a class of "blue" using jQuery
// 2.6. Append the newly created element next to the the "Sony" <li> element
// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// display the result inside the "blueCompanies" div.


$(document).ready(function() {
    //1
    var element1 = $("#techCompanies");
    console.log(element1);
    //2
    var numberOfTechCompanies = $("#techCompanies li").length;
    console.log("Number of tech companies:", numberOfTechCompanies);
    //3
    var redElements = $(".red");
    console.log("Red elements:", redElements);
    //4
    // $("<li>") this creates new li element
    var newLiElement = $("<li>").text("Facebook");
     console.log("New li element:", newLiElement);
     console.log("New li element:", newLiElement.text());
    //5
    newLiElement.addClass("blue");
    //6
    $("#techCompanies ").append(newLiElement)   
// var lastLiElement = $("#techCompanies li").last();
// lastLiElement.after(newLiElement);
    //7
    var numberOfBlueCompanies = $("#techCompanies .blue").length;
    $("#blueCompanies").text("Number of tech companies labeled blue: " + numberOfBlueCompanies);
    // var numberOfTechCompanies = $("#techCompanies li").length;
    // console.log("Number of tech companies:", numberOfTechCompanies);
});



// Question 3:
// A form with two text fields is provided under the section which says "For question 3". Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1. Display the result on the console
// 3.2. Display the result underneath the form
// 3.3. If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form

$(document).ready(function() {
    $("#submitButton").click(function(event) {
        event.preventDefault(); // Prevent form submission
        
        
        var firstValue = parseFloat($("input[name='first-value']").val());
        var secondValue = parseFloat($("input[name='second-value']").val());
       
        if (!isNaN(firstValue) && !isNaN(secondValue)) {
           
            var sum = firstValue + secondValue;
            var average = sum / 2;
            
           
            console.log("Sum:", sum);
            console.log("Average:", average);
            
   
            $("#sum").text("Sum: " + sum + ", Average: " + average);
            
        } else {
           
            $("#sum").text("Please enter numerical values only");
           
        }
    });
});


// Question 4:
// Create an HTML form which asks users to provide their First name, Last name and Email
// address. All the fields should be labeled as required. Once the user submits, write a JavaScript
// function that checks if all the fields are provided. If not, it should show an error message above
// the form.
// If the user provides all the values, hide the form input fields, and display all the values provided
// by the user on the browser.



$(document).ready(function() {
    $("#submitt").click(function() {
        event.preventDefault(); // Prevent form submission
        
        
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        
        
        if (firstName && lastName && email) {
            
            $("#userInfoForm").hide();
            
            
            $("#userInfoForm").html("<h3>User Information</h3>" +
                                "<p><strong>First Name:</strong> " + firstName + "</p>" +
                                "<p><strong>Last Name:</strong> " + lastName + "</p>" +
                                "<p><strong>Email:</strong> " + email + "</p>").show();
        
        } else {
          
            $("#error").html("Please provide all required fields.");
        }
    });
});
