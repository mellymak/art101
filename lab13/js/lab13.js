/*
 * Author: Melanie Mak
 * Created: 11.20.21
 * License: Public Domain
 */
result = ""

function FizzBuzzBoom(result) {
 for (var num=0; num<=200; num++) {
     var str= "";
     if (num % 3 == 0) {
         str += "Fizz";
     }
     if (num % 5 == 0) {
         str += "Buzz";
     }
     if (num % 7 == 0) {
         str += "Boom";
     }
     if (str.length > 0){
         str += "!</br>";
     }
     result += str;
     }
     $("output").html(result);
  }

FizzBuzzBoom(result);
