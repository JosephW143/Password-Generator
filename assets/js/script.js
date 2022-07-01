/*
create functions to get an answer for if user wants wants lowercase, uppercase, numbers, and/or special characters in their passowrd as well as the length
- promts should ask if user wants to add characters through a window prompt that will be confimed or cancled 
- function should return a value that will be called in the generate passowrd function 

create a random number function that calls on the values to know what password to generate random characters for each value 

create a generate password funciton that calls on other functions to generate a password 
*/
// Assignment code here
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvqxyz';
const num = '1234567890';
const special = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

var  upperCase = function() {
  var upperCase = window.prompt("how many characters would you like. must be between 8 and 128")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
