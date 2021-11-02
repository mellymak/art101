/*
 * Author: Melanie Mak
 * Created: 11.1.21
 * License: Public Domain
 */

 // Use getElementById() to find your output <div> and assign it to a variable outputEl
document.getElementById("output");
 var outputEl = document.getElementById("output");

 // Create a new element with document.createElement("p") and assign it to a variable new1El
document.createElement("p")
 var new1El = document.createElement("p")

 // Change the html attribute of new1El to say something new.
new1El.innerHTML = "howdy partner!";

 // Create another new element and assign it to a variable new2El
document.createElement("new")
 var new2El = document.createElement("button");

 // Change the html attribute of new2El to say something else.
new2El.innerHTML = "<button id=magic>you are so magical!</button>";

 // Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El)
outputEl.appendChild(new2El)

 // // Change the css attributes of at least two elements of your page
 new2El.style.color = "white";
 new2El.style.backgroundcolor = "lavender";

 new1El.style.color = "green";
