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
  console.log("passwordLength: ", passwordLength);
  if(passwordLength < 8 || passwordLength > 128) {
    window.prompt("Please enter a value between 8 and 128!");
    
  } 
  var upperConfirm =  window.confirm("Do you want to include uppercase letters?");  
  if(upperConfirm) {
    finalPassword = finalPassword.concat(upperChar);
    console.log("finalPassword:", finalPassword);
  }  
  var specialConfirm = window.confirm("Do you want to include special characters?"); 
  if(specialConfirm) {
    finalPassword = finalPassword.concat(specialChar);
    console.log("finalPassword:", finalPassword);
    
  }
  var numConfirm = window.confirm("Do you want to include numbers?");
  if(numConfirm) {
    finalPassword = finalPassword.concat(numChar);
    console.log("finalPassword: ", finalPassword);
  }
  var lowerConfirm = window.confirm("Do you want to include lowercase letters?");
  if(lowerConfirm) {
    finalPassword = finalPassword.concat(lowerChar);
    console.log("finalPassword: ", finalPassword);
  }  
   function randomize() {
     var randomResult = finalPassword[Math.floor(Math.random()) * finalPassword.length] ;
     console.log(randomResult);
   }
   passwordLength;
   for(i= 0; i < passwordLength; i++){
     randomize();
   }
  

  // trying to create a loop that iterates through finalPassword
  // and selects random elements, stopping the loop when it has
  //  reached the passwordLength variable from the user input int he prompt at beginning of code
  // for(i=0; i < finalPassword.length; i++{
    // for(s=0; i < ; i++{

    // function creatRandomPassword() {
      // for (var i = 0; i < passwordLength ; i++) {
        // finalPassword += finalPassword.charAt(Math.floor(Math.random() * passwordLength));
        
      //  console.log(finalPassword);    
      //  }
    // }

}

    




 
 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", getPasswordFormula);
