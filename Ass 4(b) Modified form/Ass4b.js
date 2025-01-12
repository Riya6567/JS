// JavaScript code for handling the form and DOM manipulation
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    if (!validateForm()) {
        alert("Please fill out all required fields correctly.");
        return;
    }

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let country = document.getElementById("country").value;

    // Get selected fruits
    let fruits = [];
    document.querySelectorAll('input[name="fruits"]:checked').forEach(function(fruit) {
        fruits.push(fruit.value);
    });

    let comments = document.getElementById("comments").value;

    // Display results
    document.getElementById("resultName").textContent = "Name: " + name;
    document.getElementById("resultEmail").textContent = "Email: " + email;
    document.getElementById("resultAge").textContent = "Age: " + age;
    document.getElementById("resultGender").textContent = "Gender: " + gender;
    document.getElementById("resultCountry").textContent = "Country: " + country;
    document.getElementById("resultFruits").textContent = "Favorite Fruits: " + fruits.join(", ");
    document.getElementById("resultComments").textContent = "Comments: " + comments;

    // Change background color of results section
    document.getElementById("results").style.backgroundColor = "#e6ffe6";

    // Change button text after submission
    document.getElementById("submitButton").textContent = "Submitted!";
});

document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("userForm").reset(); // Reset form inputs
    document.getElementById("submitButton").textContent = "Submit"; // Reset button text
    clearResults(); // Clear results section
});

document.getElementById("mainHeading").addEventListener("mouseover", function() {
    this.classList.add("hover-effect"); // Add hover effect on heading
});

document.getElementById("mainHeading").addEventListener("mouseout", function() {
    this.classList.remove("hover-effect"); // Remove hover effect on heading
});

// Function to validate form
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    if (name.length < 3 || email == "" || age < 18 || age > 100) {
        return false;
    }
    return true;
}

// Function to clear results section
function clearResults() {
    document.getElementById("resultName").textContent = "";
    document.getElementById("resultEmail").textContent = "";
    document.getElementById("resultAge").textContent = "";
    document.getElementById("resultGender").textContent = "";
    document.getElementById("resultCountry").textContent = "";
    document.getElementById("resultFruits").textContent = "";
    document.getElementById("resultComments").textContent = "";
    document.getElementById("results").style.backgroundColor = "#f9f9f9"; // Reset background color
}