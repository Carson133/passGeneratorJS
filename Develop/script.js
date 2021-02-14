// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generat Password
function generatePassword() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var specials = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','|','^','_','`','{','}','~'];
  var passArray = [];
  var length = 0;

  while (length < 8 || length > 128) {
    length = prompt('Enter a legnth for your password between 8 - 128', 'Ex: 12');
  }

  var lowerPrompt = confirm('Do you want lowercase letters in your password?');
  var upperPrompt = confirm('Do you want uppercase letters in your password?');
  var numPrompt = confirm('Do you want numbers in your password?');
  var specPrompt = confirm('Do you want special characters in your password?');
  var sentinal = 0;

  if (lowerPrompt === false && upperPrompt === false && numPrompt === false && specPrompt === false) {
    return password;
  }

  for (let i = 0; i < length; i++) {
    sentinal = 0; 
    while(sentinal === 0){
      var option = Math.floor(Math.random(4) * Math.floor(4));
      console.log('option= '+option);
      if(option == 0 && lowerPrompt === true){
        passArray[i] = letters[Math.floor(Math.random(letters.length) * Math.floor(letters.length))];
        sentinal = 1;
      }else if (option == 1 && upperPrompt === true){
        passArray[i] = letters[Math.floor(Math.random(letters.length) * Math.floor(letters.length))].toUpperCase();
        sentinal = 1;
      }else if (option == 2 && numPrompt === true){
        passArray[i] = numbers[Math.floor(Math.random(numbers.length) * Math.floor    (numbers.length))];
        sentinal = 1;
      }else if (option == 3 && specPrompt === true){
        passArray[i] = specials[Math.floor(Math.random(specials.length) * Math.floor(specials.length))];
        sentinal = 1;
      }else{
        console.log('error');
        console.log('sen= '+sentinal);
        sentinal = 0;
        option++;
      }
    }
  } 

  var password = passArray.join('');
  return password;
}