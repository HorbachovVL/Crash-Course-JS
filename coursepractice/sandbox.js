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
      return a * a;
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

console.log(calculateFigureArea("cirle", 10, 15));