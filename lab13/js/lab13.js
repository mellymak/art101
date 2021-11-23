/*
 * Author: Melanie Mak
 * Created: 11.20.21
 * License: Public Domain
 */
function FizzBuzzBoom() {
 for (var num=0; num<=200; num++) {
     var str= "";
     if (num % 3 == 0) {
         str += "Fizz";
         $("#output").append("<p>" + str + "</p>");
     }
     if (num % 5 == 0) {
         str += "Buzz";
         $("#output").append("<p>" + str + "</p>");
     }
     if (num % 7 == 0) {
         str += "Boom";
         $("#output").append("<p>" + str + "</p>");
     }
     else {
         str += "!</br>";
     }
     console.log(num.toString() + str);
  }
}
