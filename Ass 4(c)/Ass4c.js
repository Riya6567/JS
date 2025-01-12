// Part 1 : Basic Selectors
// Change the text of the Header Title
document.getElementById("headerTitle").textContent = "JavaScript DOM Manipulation";

// Change the text color of all paragraphs with class 'description' to blue 
let descriptions = document.getElementsByClassName("description");
for (let i = 0; i < descriptions.length; i++) 
{
    descriptions[i].style.color = 'blue';
}

// Change the font style of all divs to Italic
let divs = document.getElementsByTagName('div');
for (let i = 0; i < divs.length; i++)
{
    divs[i].style.fontStyle = 'italic';
}

// Add the class 'highlight' to the first paragraph element found
document.querySelector("p").classList.add("highlight");

// Change the background  color of all buttons to Green 
let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.style.backgroundColor = "green";
});

// Part 2 : Getter and Setter Values

// Display the value from the input field in the outputArea when the button is clicked
document.getElementById('submitButton').addEventListener('click', function(){
    let inputValue = document.getElementById("usernameInput").value;
    document.getElementById('outputArea').textContent = "You Entered : " + inputValue;

    // Clear the input field after displaying the value 
    document.getElementById("usernameInput").value = "";
});

// Part 3 : Handling Attributes 
// Get the href value from the link and display it in the outputArea
let link = document.getElementById("myLink");
document.getElementById("outputArea").textContent = "Link URL : " +  link.getAttribute("href");

// Change the href of the link to a new URL and update its text
link.setAttribute("href","https://www.google.com");
link.textContent = "Go to Example";

// Remove the href attribute from the link and update the outputArea
link.removeAttribute("href");
document.getElementById("outputArea").textContent = "Link is now disabled";

// Check if the link still has an href attribute and display a message in the outputArea
if (!link.hasAttribute("href"))
{
    document.getElementById("outputArea").textContent = "The link is no longer active";
}

// Bonus : Toggle the visibility of the contentArea when the toggle button is clicked 
document.getElementById("toggleButton").addEventListener("click",function(){
    let contentArea = document.getElementById("contentArea");
    if (contentArea.style.display === "none"){
        contentArea.style.display = "block";
    } else {
        contentArea.style.display = "none";
    }
});