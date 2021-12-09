function findingvowels(userInput) {	
	let newArray = [];
	for (i = 0; i < userInput.length; i++)
	{
	  if(userInput.charAt(i) == 'a' 
	  || userInput.charAt(i) == 'e' 
	  || userInput.charAt(i) == 'i' 
	  || userInput.charAt(i) == 'o'
	  || userInput.charAt(i) == 'u')
	  {
		let first = newArray.push(userInput.charAt(i));
		newArray.splice(0, newArray.length, ...(new Set(newArray)));
	}
	
  }
  console.log("Vowels " + newArray);
}
  findingvowels("umuziacademy")