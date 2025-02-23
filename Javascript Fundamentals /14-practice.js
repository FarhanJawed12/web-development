// Prompt the user to enter their full name. Generate a username for them based on the input. 
// Start username with @, follwed by their username and ending with the full name

let fullName = prompt("Enter your fullname without spaces");

//fullName = "Farhan Jawed";

// removing leading and trailing spaces
let trimFullName = fullName.trim();

//removing internal space
let noSpaceFullName = trimFullName.replaceAll(" ", "");

let username = "@" + noSpaceFullName + noSpaceFullName.length;

console.log(username);
