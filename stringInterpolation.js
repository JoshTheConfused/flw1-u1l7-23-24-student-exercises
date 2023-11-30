// html div
let greeting = document.querySelector(".greeting");

// 1. Create a variable called `firstName` and set the value to your name.
let firstName = "Joshua";

// 2. Create a variable called `lastName` and set the value to your last name.
let lastName = "Federman";


// 3. Create a variable called `greetingMessage`.
// - Using string interpolation, create a messga that say "Hi, (your first name) (your last name)!"
let greetingMessage = `Hi, ${firstName} ${lastName}`;


// 4. Set the innerHTML of the greeting div to the greeting message.
greeting.innerHTML = greetingMessage;