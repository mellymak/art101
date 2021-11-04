/*
 * Author: Melanie Mak
 * Created: 11.1.21
 * License: Public Domain
 */

 // Borrow the nameSort() function or my anagram() function from Lab 7.
 function myFunction() {
 	//Stores the name of the user in a variable
  document.getElementById("user-name");
   var username = document.getElementById("user-name");
 	console.log(username);

 	//Splits username into individual letters
 	var nameList = username.split("");
 	console.log(nameList);

 	//Sorts the letters in nameList
 	var sortedNames = nameList.sort();
 	console.log(sortedNames);

 	//Combines the letters from sortedNames into one word
 	var newserName = sortedNames.join("");
 	console.log(newserName);

 	return newserName;
 }

 // Attach an event listener to your button that does the following:


var button = document.getElementById("my-button")

button.addEventListener('click', myFunction);
 // Gets the value of your input field


 // Runs that value through your sort() or anagram() function and saves the results.


 // Replaces the html in <div id=output> with the results.
}
