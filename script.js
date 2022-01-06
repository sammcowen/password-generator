// Assignment code here
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", ];
var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperChar = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var lowerChar = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
 "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var passwordLength = prompt("enter desired password length. Must be between 8 and 128");

function getPasswordFormula()  {
  var passwordLength =  prompt("Enter desired password character length. Must be between 8 and 128 characters");
  var upperYes =  window.confirm("Do you want to use uppercase letters?");
   
   window.confirm("Do you want to use special characters?");
    
     window.confirm("Do you want to use numbers?");
   window.confirm("Do you want to use lowercase letters?");
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
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", getPasswordFormula);
