/*
 * Author: Melanie Mak
 * Created: 10.27.21
 * License: Public Domain
 */

function addThree(x){
  return (x + 3);
}

//test function
console.log("9 + 3 = " + addThree(9));
console.log("100 + 3 = " + addThree(100));

array = [8, 66, 92, 3, 16, 21]
console.log("My array: ", array);

var result = array.map(addThree);
//should return array + 3 each value
console.log("Test of adding three to array: ", result);

var result2 = array.map(function(x){
  return x * 2;
})

//should return array times 2 each value
console.log("Test of multiplying the array times 2: ", result1);
