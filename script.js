// Text to be typed with line breaks
const text = "Hello,\nwelcome to my\nportfolio !";

// Variables
let index = 0;
let typingSpeed = 100; // Adjust typing speed in milliseconds

// Function to type the text
function typeEffect() {
    if (index < text.length) {
        let currentChar = text.charAt(index);
        
        // If the current character is a newline, add a <br> instead of a character
        if (currentChar === "\n") {
            document.getElementById("typing").innerHTML += "<br>";
        } else {
            document.getElementById("typing").innerHTML += currentChar;
        }
        
        index++;
        setTimeout(typeEffect, typingSpeed);
    }
}

// Start typing effect
window.onload = typeEffect;

