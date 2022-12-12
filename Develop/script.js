// Assignment Code
var generateBtn = document.querySelector("#generate");
const result = document.querySelector("#result");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");

var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm"
var numbersIncluded = "1234567890"
var specialCharacters = "~`!@#$%^&*()-_=+':;,<.>/?"
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
var generatedPassword = "";


function generatePassword() {

  var generatedPassword = document.querySelector("#password");
  generatedPassword.value = password;

  var passwordLength = window.prompt("Enter Password Length (Between 8 and 128 Characters)");
  console.log(passwordLength);




  if (passwordLength > 7 && passwordLength < 129) {
    var lowercaseLetters = window.confirm("Do you want to include lowercase?");
    var upperCase = window.confirm("Do you want to include uppercase?");
    var numbersIncluded = window.confirm("Do you want to include numbers?");
    var specialCharacters = window.confirm("Do you want to include special characters?");



  }
  else alert("Incorrent number of characters!");

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


