// html elements
let circle = document.querySelector(".circle");
let square = document.querySelector(".square");
let rectangle = document.querySelector(".rectangle");
let isOrange = false;

circle.addEventListener("click", function() {

    // 1. Update the circle using the style property.
    // - Set the background color to purple.
    // - Set the width to 150px.
    // - Set the height to 150px.
  circle.style.backgroundColor = "purple";
  circle.style.width = 150;
  circle.style.height = 150;
  circle.style.opacity = 0.4;
});

square.addEventListener("click", function() {

    // 2. Update the square using the style property.
    // - Set the background color to yellow.
    // - Set the width to 150px.
    // - Set the height to 150px.
  square.style.backgroundColor = "yellow";
  square.style.width = 150;
  square.style.height = 150;
  square.style.borderStyle = "solid";
  square.style.border = 5;
  square.style.borderColor = "red";
});

rectangle.addEventListener("click", function() {

    // 3. Update the rectangle using the style property.
    // - Set the background color to orange.
    // - Set the width to 250px.
    // - Set the height to 150px.
  if (!isOrange) {
    rectangle.style.backgroundColor = "orange";
    rectangle.style.width = 250;
    rectangle.style.height = 150;
    isOrange = true;
  }
  else {
    rectangle.style.display = "none";
  }
});

// Extension: Check out the available CSS properties here: https://www.w3schools.com/cssref/index.php 
// - Set a new CSS property and value for each shape using the same style property syntax.
// - See if you can get the rectangle to disappear when clicked (hint: check out the display CSS property)
