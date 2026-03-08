function firstNonRepeatedChar(str) {
 var letters = str.split("");
	for (let item of letters) {
		if (letters.indexOf(item) == letters.lastIndexOf(item)) {
			return item;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
