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
var finalPassword = [];
var passwordLength ;


// prompts for password creation
function getPasswordFormula()  {
  var passwordLength = (prompt("Enter desired password character length. Must be between 8 and 128 characters"));
  //console.log("passwordLength: ", passwordLength);
  if(passwordLength < 8 || passwordLength > 128) {
    window.prompt("Please enter a value between 8 and 128!");
  } else {
      alert("You chose " + passwordLength + " characters for your password.");
    }
  
  var upperConfirm =  window.confirm("Do you want to include uppercase letters?");  
  if(upperConfirm) {
    finalPassword = finalPassword.concat(upperChar);
    alert("you chose to select uppercase letters in your password.");
    console.log("finalPassword:", finalPassword);
  }  else {
    alert("You do not want any uppercase letters in your password.");
  }
  var specialConfirm = window.confirm("Do you want to include special characters?"); 
  if(specialConfirm) {
    finalPassword = finalPassword.concat(specialChar);
    alert("You chose to select special characters in your password.");
    console.log("finalPassword:", finalPassword);
  }else {
    alert("You do not want any special characters in your password ");
  }
    
  
  var numConfirm = window.confirm("Do you want to include numbers?");
  if(numConfirm) {
    finalPassword = finalPassword.concat(numChar);
    alert("You chose to select numbers in your password.");
    console.log("finalPassword: ", finalPassword);
  }else {
    alert("You do not want to include numbers in your password.");
  }
  var lowerConfirm = window.confirm("Do you want to include lowercase letters?");
  if(lowerConfirm) {
    finalPassword = finalPassword.concat(lowerChar);
    alert("You chose to include lowercase letters in your password.");
    console.log("finalPassword: ", finalPassword);
  }  else {
    alert("You do not want to include lowercase letters in your password.");
  }
  var randomResult = ""; 
   function randomize() {
      randomResult += finalPassword[Math.floor(Math.random() * finalPassword.length)] ;
   }
  
   for(i= 0; i < passwordLength; i++){
     randomize();
   }
   console.log(randomResult)
   return randomResult;

  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = getPasswordFormula();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

