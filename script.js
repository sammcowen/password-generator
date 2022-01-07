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
// prompts for password creation
function getPasswordFormula()  {
  var passwordLength =  prompt("Enter desired password character length. Must be between 8 and 128 characters");
  if(passwordLength < 8 || passwordLength > 128) {
    window.prompt("Please enter a value between 8 and 128!");
  } 
  var upperConfirm =  window.confirm("Do you want to include uppercase letters?");  
  if(upperConfirm) {
  var randomUpper = upperChar[(Math.random() * upperChar.length) | 0]
console.log(randomUpper);
  }  
  var specialConfirm = window.confirm("Do you want to include special characters?"); 
  if(specialConfirm) {
    var randomSpecial = specialChar[(Math.random() * specialChar.length) | 0]
    console.log(randomSpecial);
  }
  var numConfirm = window.confirm("Do you want to include numbers?");
  if(numConfirm) {
    var randomNum = numChar[(Math.random() * numChar.length) | 0]
    console.log(randomNum);
  }
  var lowerConfirm = window.confirm("Do you want to include lowercase letters?");
  if(lowerConfirm) {
    var randomLower = lowerChar[(Math.random() * lowerChar.length) | 0]
    console.log(randomLower);
  }
   console.log("passwordLength: ", passwordLength);
   console.log("upperConfirm: ", upperConfirm);
   console.log("specialConfirm: ", specialConfirm);
   console.log("numConfirm: ", numConfirm);
   console.log("lowerConfirm: ", lowerConfirm);

};

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
