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
const numsArray = [
  1, 3, 5, 10, 19, 100, 200, 33,
]
function sumNumbersInArray(array) {
  return array.reduce((total, item) => total + item, 0)
}
console.log(sumNumbersInArray(numsArray))

// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
const arrayItems = [
  { a: 1, b: 3 },
  { a: 3, b: 3 },
  { a: 6, b: 3 },
  { a: 10, b: 10 },
  { a: 41, b: 1 },
  { a: 0, b: 4 }
];
function filterAndExtendArrayItems(array) {
  
}
console.log(filterAndExtendArrayItems(arrayItems))

// Task 5 - merge arrays and remove duplicates
const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];
function mergeArraysWithoutDuplicates(array1, array2) {
  return [...new Set([...array1, ...array2])]
}
console.log(mergeArraysWithoutDuplicates(arNum, arNum2))
