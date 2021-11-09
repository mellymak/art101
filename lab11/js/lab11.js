/*
 * Author: Melanie Mak
 * Created: 11.8.21
 * License: Public Domain
 */

//adding buttons to the challenge, problems, and results sections with labels
$("#one").append("<button id='button1'>click me!</button>");
$("#two").append("<button id='button2'>click me too!</button>");
$("#three").append("<button id='button3'>click me last!</button>");

//adding click function
$("#button1").click (function() {
  //adding a toggle class
  $("#one").toggleClass("pink")
})

//adding click function
$("#button2").click (function() {
  //adding a toggle class
  $("#two").toggleClass("purple")
})

//adding click function
$("#button3").click (function() {
  //adding a toggle class
  $("#three").toggleClass("blue")
})
