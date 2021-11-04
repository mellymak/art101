/*
 * Author: Melanie Mak
 * Created: 11.1.21
 * License: Public Domain
 */

 // Borrow the nameSort() function or my anagram() function from Lab 7.
 function nameSort() {
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


 function putNameInTitle() {
  // When the button is pushed,
  // prompt the user to input their name
  // with the prompt() function.
  //var name = prompt("Please enter your name:");
  var username = document.getElementById("user-name");
  var name = field.value;

  // Use this input to change the text from
  // ‘Hello, World!’ to ‘Hello’ + the user’s name
  var headingEl = document.getElementById("title");
  headingEl.innerHTML = "Hello, " + newserName;
}

// Create an event handler within the JS file that listens for a button click.
var buttonEl = document.getElementById("my-button");
buttonEl.addEventListener("click", putNameInTitle);
