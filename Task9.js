
function findingvowels(userInput) {
  var userInput = "Successful programmers know that it is really important to pay attention to detail"
  for (i = 0; i < userInput.length; i++)
  {
    if(userInput.charAt(i) == 'a' || userInput.charAt(i) == 'e' || userInput.charAt(i) == 'i' || userInput.charAt(i) == 'o'
    || userInput.charAt(i) == 'u')
    {
     console.log("Vowels-" + userInput.charAt(i));
    }
  }

}
findingvowels();