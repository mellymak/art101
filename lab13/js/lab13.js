/*
 * Author: Melanie Mak
 * Created: 11.20.21
 * License: Public Domain
 */
 //create temporary string for output
result = ""
//create function FizzBuzzBoom with parameter to change
function FizzBuzzBoom(result) {
  //loop will run numbers 1-200
 for (var num=0; num<=200; num++) {
   //create temporary string to sort the numbers
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
     //print results into output section
     $("output").html(result);
  }
//Call the FizzBuzzBoom function
FizzBuzzBoom(result);
