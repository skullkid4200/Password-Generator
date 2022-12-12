// Assignment Code
var generateBtn = document.querySelector("#generate");
var result = document.querySelector("#result");


var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm"
var numbers = "1234567890"
var specialCharacters = "~`!@#$%^&*()-_=+':;,<.>/?"
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"



function generatePassword() {

  var generatedPassword = "";
  var passwordLength = window.prompt("Enter Password Length (Between 8 and 128 Characters)");
  console.log(passwordLength);

  if (passwordLength > 7 && passwordLength < 129) {

    var lowercaseLettersIncl = window.confirm("Do you want to include lowercase?");
    var upperCaseLettersInl = window.confirm("Do you want to include uppercase?");
    var numbersIncluded = window.confirm("Do you want to include numbers?");
    var specialCharactersIncl = window.confirm("Do you want to include special characters?");
    var charactersSelected = "";

    if (lowercaseLettersIncl) {
      charactersSelected = charactersSelected + lowercaseLetters;
    }
    if (upperCaseLettersInl) {
      charactersSelected = charactersSelected + upperCase;
    }
    if (numbersIncluded) {
      charactersSelected = charactersSelected + numbers;
    }
    if (specialCharactersIncl) {
      charactersSelected = charactersSelected + specialCharacters;
    }


    for (var i = 0; i < passwordLength; i++) {
      var index = getRandomInt(charactersSelected.length)
      generatedPassword = generatedPassword + charactersSelected.charAt(index)

    }

  }

  else alert("Incorrent number of characters!");
  return generatedPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}