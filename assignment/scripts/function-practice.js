console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log(hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  return 'Yo! ' + name;
}
console.log(helloName('Brett'))


// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
   let answer = firstNumber + secondNumber;
   return answer;
}
console.log(addNumbers(1,1))

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  let answerx = num0 * num1 * num2;
  return answerx;
}
console.log(multiplyThree(1,2,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  let lastNum = array[array.length - 1]
  return lastNum;
}
console.log(getLast([1, 2, 5, 4, 7]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


//function find( value, array ){
//  for (let i=0; i<array.length; i++){
//    console.log('array value found?', array[i]);
//    console.log(value)
//    if (array[i] = value) {
//      return true;
//    } else {
//      return false;
//    }
//  }
//}  FIRST ATTEMPT - FAILED

function find( value, array ){
  for (num in array) {
    if (num == value) {
      return true;
    }
  }

  return false;
}

console.log(find(5, [1,2,3,4]))
console.log(find(2, [1,2,3,4]))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  //console.log(string.charAt(0));
  //console.log(letter.charAt(0));
  let firstLetter = string.charAt(0);
  let secondLetter = letter.charAt(0);
  if (firstLetter === secondLetter) {
    return true;
    } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );


// 9. Function to return the sum of all numbers in an array
//function sumAll() {
//  let sum = 0
//  for 
  // TODO: loop to add items
//  return sum;
//}
//let totale = [1,2,3,4,5];
//console.log(sumAll(totale));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
