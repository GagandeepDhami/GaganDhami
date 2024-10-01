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

$(document).ready(function() {

  // Add click event for the About Me button
  $('#about-button').on('click', function() {
    // Scroll to the About section
    $('html, body').animate({
      scrollTop: $('#about').offset().top - 140 // Adjust the offset as needed
    }, 900);
  });
});


$(document).ready(function() {
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Smooth page scroll with offset for the navbar
      $('html, body').animate({
        scrollTop: $(hash).offset().top - $('.navbar').height() - 70
      }, 900, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  // Slide animation trigger for scroll effects
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
  
  // Prevent jump on initial load
  $(window).on('load', function() {
    if (window.location.hash) {
      var hash = window.location.hash;
      // Scroll to the top immediately on page load to avoid the jump
      $('html, body').scrollTop(0);
      
      // Use a timeout to ensure the layout is complete before scrolling
      setTimeout(function() {
        $('html, body').animate({
          scrollTop: $(hash).offset().top - $('.navbar').height() - 70
        }, 900);
      }, 300); // This delay can be adjusted based on the page load speed
    }
  });
});