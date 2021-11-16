/*
 * Author: Melanie Mak
 * Created: 11.8.21
 * License: Public Domain
 */

 function sortingHat(str) {
     var num = str.length;
     var mod = num%4;
     if (mod === 0) {
         // if can be divided by 4, then
         return "Steamed Dumpling";
     }
     else if (mod === 1) {
         return "Fried Dumpling";
     }
     else if (mod === 2) {
         return "Juicy Dumpling";
     }
     else if (mod === 3) {
         return "Sweet Dumpling";
     }
 }

 var myButton = document.getElementById("button");
 myButton.addEventListener("click",function() {
   var name = document.getElementById("input").value;
   var house = sortingHat(name)
   newText = "<p>The Dumpling Kingdom has sorted you into " + house + "</p>";
   document.getElementById("output").innerHTML = newText;

 })
