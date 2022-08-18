// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var symbols ='#$%&()*+,-./:;<=>?@[\]^_`{|}~'
  var numbers = '1234567890'
  var hasLower = confirm("Will your password have lowercase?");
  var hasUpper = confirm("Will your password have uppercase?");
  var hasSymbol = confirm("Will your password have symbols?");
  var hasNumber = confirm("Will your password have numbers?");
  var characters = prompt('How many character will your password include')
  if(characters < 8 || characters >128 ){
    alert('Characters must be more than 8 and less than 128');
  }
  possiblepass=''
  currentpassword=''
  if(hasLower){
    possiblepass +=lowerCase
  }
  if(hasUpper){
    possiblepass +=upperCase
  }
  if(hasSymbol){
    possiblepass +=symbols
  }
  if(hasNumber){
    possiblepass +=numbers
  }
  for(var i=0; i < characters; i++){
    var random = Math.floor(Math.random()* possiblepass.length)
    currentpassword += possiblepass[random]
  }
  console.log(currentpassword);
  return(currentpassword);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);