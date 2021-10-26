/**
 * Author: Melanie Mak
 * Created: 10.26.21
 *
 * License: Public Domain.
 **/

 //Function that sorts the letter in the name
 function myFunction() {
 	//Stores the name of the user in a variable
 	var username = window.prompt("Please enter your first name and I'll sort it for you instantly!");
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

 document.writeln("Here is your new username ", myFunction());
