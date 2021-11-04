/*
 * Author: Melanie Mak
 * Created: 11.4.21
 * License: Public Domain
 */

 function putNameInTitle() {
  // When the button is pushed,
  // prompt the user to input their name
  // with the prompt() function.
  //var name = prompt("Please enter your name:");
  var username = document.getElementById("user-name");
  var name = username.value;

  // Use this input to change the text from
  // ‘Hello, World!’ to ‘Hello’ + the user’s name
  var headingEl = document.getElementById("output");
  headingEl.innerHTML = "(Please) Input Your Name:" + name;
}

// Create an event handler within the JS file that listens for a button click.
var buttonEl = document.getElementById("my-button");
buttonEl.addEventListener("click", putNameInTitle);
