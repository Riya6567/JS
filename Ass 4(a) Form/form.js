function processForm() {
    // Access form elements
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let country = document.getElementById("country").value;
    let subscribe = document.getElementById("subscribe").checked;
    let comments = document.getElementById("comments").value;

    // Validation checks    
    if (name.length < 3 || name.length > 20) {
        alert("Name must be between 3 and 20 characters long.");
        return false;
    }
    if (age < 18 || age > 100) {
        alert("Age must be between 18 and 100.");
        return false;
    }

    // Dynamically update the webpage content
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Submitted Information:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Country:</strong> <b>${country}</b></p>
        <p><strong>Comments:</strong> ${comments}</p>
    `;
    if (subscribe) {
        outputDiv.innerHTML += `<p><strong>Newsletter Subscription:</strong> 
        You've subscribed to our newsletter!</p>`;
    } else {
        outputDiv.innerHTML += `<p><strong>Newsletter Subscription:</strong> 
        You chose not to subscribe to our newsletter.</p>`;
    }
    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("Email is not valid.");
        return false;
    }
    // Prevent form submission
    return false;
}