function findingvowels(userInput,userInputsecond) {
  var userInput = "Umuzi"
  var userInputsecond = "William"
  for (i = 0; i < userInput.length; i++)
  {
    if(userInput.charAt(i) == 'a' || userInput.charAt(i) == 'e' || userInput.charAt(i) == 'i' || userInput.charAt(i) == 'o'
    || userInput.charAt(i) == 'u')
    {
     console.log("Umuzi Vowels-" + userInput.charAt(i));
    }
  }
  for (i = 0; i < userInputsecond.length; i++)
  if(userInput.charAt(i) == 'a' || userInput.charAt(i) == 'e' || userInput.charAt(i) == 'i' || userInput.charAt(i) == 'o'
    || userInput.charAt(i) == 'u')
    {
     console.log("William Vowels-" + userInputsecond.charAt(i));
    }
}
findingvowels();