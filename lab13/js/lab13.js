/*
 * Author: Melanie Mak
 * Created: 11.20.21
 * License: Public Domain
 */
function FizzBuzzBoom() {
 for (var i=0; i<=200; i++) {
     var str= "";
     if (i % 3 == 0) {
         str += "Fizz";
     }
     if (i % 5 == 0) {
         str += "Buzz";
     }
     if (i % 7 == 0) {
         str += "Boom";
     }
     if (str == "") {
         str = i;
     }
     else {
         str += "!";
     }
     console.log(str);
  }
}

$("#output").append("<p>" + str + "</p>");
