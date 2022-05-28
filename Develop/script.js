// Assignment code here
//Creating variables
var uppercaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseletters = 'abcdefghijklmnopqrstuvqxyz';
var numbers = '123456789';
var specialcharacter = '!@#$%^&*()_+';


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
