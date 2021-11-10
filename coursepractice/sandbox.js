//1: https://codesandbox.io/s/js-array-basic-tasks-forked-sirro?file=/src/basicTasks.js
//2: https://codesandbox.io/s/js-funcs-tasks-forked-lqwkw?file=/src/tasksWithFunctions.js

//////////////////////////////////////////////////////////////////////////////////////////
//TASK 1
/////////////////////////////////////////////////////////////////////////////////////////
// Task 1 - add new fields name with value "Felix", and age - 7
const objWithNewFields = {};

// code here
objWithNewFields.name = "Felix";
objWithNewFields.age = 7;
// Task 1 - end

// Task 2 - correct the condition to have correct value in the res field
const objWithRes = {
  n: 3,
  res: ""
};

// code here
if (objWithRes.n === 3) {
  objWithRes.res = "n is equal 3";
} else if (objWithRes.n < 3) {
  objWithRes.res = "n is smaller than 3";
} else {
  objWithRes.res = "n is bigger than 3";
}
// Tsk 3 - end

// Task 3 - rewrite nums array with [2,3] array
const objWithNums = {
  nums: [1]
};

// code here
objWithNums.nums = [2, 3];
// Tsk 3 - end



//////////////////////////////////////////////////////////////////////////
//TASK 2
/////////////////////////////////////////////////////////////////////////
// Task 1 - should return the string "Hello, World!"
function sayHelloWorld() {
    return "Hello, World!";
  }
  
  // Task 2 - should return the string "Hello, Somename!"
function sayHello(name) {
    return `Hello, ${name}!`;
}
  
  // Task 3 - should return sum of two numbers
  // a + b
function sumNumbers(a, b) {
    return a + b;
}
  // Task 4 - should return a value by key in provided object
  // provided object - { name: 'Name' }
  // result - 'Name'
  //this try to understand
function valueByKeyInObject(key, obj = {}) {
    const newObj = obj[key];
    return newObj;
}
  
  // Task 5 - should return an object with new field and value
  // without object - { name: 'Name' }
  // with an object - { name: 'Name', age: 100 }
  //this try to understand
function extendObject(key, value, obj = {}) {
    const newObj = Object.assign({}, obj);
    newObj[key] = value;
  
    return newObj;
}
  
  // Task 6 - should return a larger argument increased by 100
  // with (10, 7) output - 110
  // with (10, 77) output - 177
function increaseBiggerArg(a, b) {
    if (a > b) {
      return a + 100;
    } else {
      return b + 100;
    }
}
  
  // Task 7 - calculate the area of a figure using
  // provided type: "square", "circle", or "rectangle"
  // for circle "a" is radius
  // for square only "a" needed
function calculateFigureArea(figureType, a, b) {
    if (figureType === "square") {
      return a * a;
    } else if (figureType === "circle") {
      return a * a * Math.PI;
    } else if (figureType === "rectangle") {
      return a * b;
    }
}
  
function calculateFigureArea(figureType, a, b) {
  switch (figureType) {
    case "square":
      return a * a
      break;
    case "circle":
      return a * a * Math.PI; 
      break;   
    case "rectangle":
      return a * b; 
      break;  
    default: 
      return 'Something went wrong'
  }
};

console.log(calculateFigureArea("circle", 10, 15));


///////////////////////////////////////////////////////////////////////////////////
//TASK 3
//////////////////////////////////////////////////////////////////////////////////

// Task 1 - add next numbers to the 3, 4, 5, 6
const nums = [1, 2];
// write code just down below
nums.push(3, 4, 5, 6)

// Task 2 - add new user Dmytro and his age is 18
const users = [
  {
    name: "Borys",
    age: 101
  }
];
// write code just down below
users.push({name: 'Dmytro', age: 18})

// Task 3 - remove first 2 elements
const extraFirstNums = [101, 100, 1, 2, 3, 4];
// write code just down below
// extraFirstNums.slice(0, 3)
extraFirstNums.shift()
extraFirstNums.shift()
console.log(extraFirstNums)


// Task 4 - remove last 2 elements
const extraLastNums = [1, 2, 3, 4, 100, 101];
// write code just down below
// extraLastNums.slice(0, 4)
extraLastNums.pop()
extraLastNums.pop()
console.log(extraLastNums)

// Task 5- add 2 nums 0 and 1 at the start of array
const extraFirstElements = [2, 3, 4];
// write code just down below
extraFirstElements.unshift(0, 1)


// Task 6 - swap elements, that have indexes 0 and 3
const sortedArray = [4, 2, 3, 1];
// write code just down below
 [sortedArray[0], sortedArray[3]] = [sortedArray[3], sortedArray[0]];


///////////////////////////////////////////////////////////////////////////////////
//TASK 4
//////////////////////////////////////////////////////////////////////////////////

// Task 1 - sort an array with numbers
// const arrayNums = [7,101,3,1,9,11,100,111]
function sortArray(array) {
  return array.sort((a, b) => a - b)
}

// Task 2 - filter an array of strings and keep only
// a string, that doesn't contain the word 'test'
// const stringsArray = [
//   'one-test', 'cat', 'parrot',
//   'banana', 'test-dog', 'dog'
// ]
function filterStringsArray(array) {
  return array.filter(item => !item.match('test'))
}

// Task 3 - find sum of numbers in array using .reduce()
// const numsArray = [
//   1, 3, 5, 10, 19, 100, 200, 33,
// ]
function sumNumbersInArray(array) {
  return array.reduce((total, item) => total + item, 0)
}


// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
// const arrayItems = [
//   { a: 1, b: 3 },
//   { a: 3, b: 3 },
//   { a: 6, b: 3 },
//   { a: 10, b: 10 },
//   { a: 41, b: 1 },
//   { a: 0, b: 4 }
// ];
function filterAndExtendArrayItems(array) {
  return array
  .filter((item) => item.a > 5)
  .map(item => {
    return {
      a: item.a,
      b: item.b,
      sum: item.a + item.b
    }
  })
}


// Task 5 - merge arrays and remove duplicates
const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];
function mergeArraysWithoutDuplicates(array1, array2) {
  return [...new Set([...array1, ...array2])]
}



///////////////////////////////////////////////////////////
//TASK 5
//////////////////////////////////////////////////////////

// Task 1 - find sum of all number in 2 arrays
const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
function sumNumsInArrays(array1, array2) {
  return  array1.concat(array2).reduce((sum, current) => sum + current, 0)
}


// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
function printEvenNumbers(n) {
 
}

// Task 3 - Using a 'for' loop output the elements in reverse order
// const arr = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
function reverseArrayItems(array) {}

// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
function sumNumsSamePosition(array1, array2) {}

// Task 5 - find sum of all number in array using 'while' loop
function sumNums(array) {}

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
// const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']
function filterArrayWithStrings(array) {}

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
function factorial(n) {}
