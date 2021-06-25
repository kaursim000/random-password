// Assignment Code
var generateBtn = document.querySelector("#generate");

var passNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var passUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var passLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var passSpecial = ["!", "#", "$", "%", "&", "(", ")", "*", ",", "+", "=", "-", "/", ":", ";", "?", "@", ">", "<", "."]
var passRandom = []
var passFinal = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  passRandom = [];
  passFinal = "";
  var passLength = prompt("How long would you like your password? (8-128)")
  passLength = parseInt(passLength)
  console.log(passLength)
  if (
    passLength < 8 || passLength > 128 || isNaN(passLength)
  ) {
    alert("Please enter a valid number")
    return
  }
  var userNumeric = confirm("Would you like numbers in your password?")
  if (
    userNumeric == true) { passRandom = passRandom.concat(passNumeric) }
  console.log(passRandom)
  var userUpperCase = confirm("Would you like uppercase letters?")
  if (
    userUpperCase == true) { passRandom = passRandom.concat(passUpperCase) }
  console.log(passRandom)
  var userLowerCase = confirm("Would you like lowercase letters?")
  if (
    userLowerCase == true) { passRandom = passRandom.concat(passLowerCase) }
  console.log(passRandom)
  var userSpecial = confirm("Would you like special characters?")
  if (
    userSpecial == true) { passRandom = passRandom.concat(passSpecial) }
  console.log(passRandom)
  if (
    userNumeric == false && userLowerCase == false && userUpperCase == false && userSpecial == false
  ) {
    alert("Please select at least one criteria")
    return
  }

  if (
    userNumeric == true || userLowerCase == true || userUpperCase == true || userSpecial == true
  ) {
    //  passRandom[Math.floor(Math.random()*passRandom.length)];
    for (var i = 0; i <= passLength; i++) {
      passFinal += passRandom[Math.floor(Math.random() * passRandom.length)];
    }
    return passFinal
  }

  // function random_item(passRandom){
  //   return passRandom[Math.floor(Math.random(passRandom)*passLength)]
  // }
  // var actualPass = random_item(passRandom)
  // console.log(actualPass)
}











  // userNumeric is true then add numbers to new variable array 






    //TODO randomize the combine types => math.floor and math.random
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
//TODO return




// create multiple if statements for each criteria and add them into a new variable array if true, when creating that math.random we will be pulling from this new array 












//DONE
        //TODO : create variables to store the information needed to generate the passowrd as a string or array
        // WHEN I click the button to generate a password
            //TODO start a function => generatePassword()
        // WHEN prompted for the length of the password
        // THEN I choose a length of at least 8 characters and no more than 128 characters
            //TODO PROMPT the user for their password length => check that this value is first a number second 8 or more characters third 128 characters or less
        // THEN I am presented with a series of prompts for password criteria
        // WHEN prompted for password criteria
        // WHEN asked for character types to include in the password
        // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
            //TODO set up a series of CONFIRM that has the user decide if they would like to include
            // take confirm and combine the true into a holder 
        // WHEN I answer each prompt
        // THEN my input should be validated and at least one character type should be selected
        // WHEN all prompts are answered
        // THEN a password is generated that matches the selected criteria
          //TODO check that user has selected at least one type
          //TODO make each confirm a variable so you see if it is selected and therefore a true value  