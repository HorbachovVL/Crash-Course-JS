//https://codesandbox.io/u/inna-i

//////////////////////////////////////////////////////////////////////////////////////////
//TASK 1 Basic Task
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
//TASK 2 Function
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
const obj = { name: 'Name' }
  // result - 'Name'
  //this try to understand
function valueByKeyInObject(key, obj = {}) {
    const newObj = obj[key];//так дістаємо значення з об'єкта
    return newObj;
}                             //бо ключ в об'кті  стрінга
console.log(valueByKeyInObject('name', obj))
  
  // Task 5 - should return an object with new field and value
const object = { name: 'Name' }
  // with an object - { name: 'Name', age: 100 }
  //this try to understand
function extendObject(key, value, obj = {}) {
    const newObj = Object.assign({}, obj);
    newObj[key] = value;
  
    return newObj;
}
console.log(extendObject('name', 'Name', object))

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
    case "circle":
      return a * a * Math.PI;   
    case "rectangle":
      return a * b;   
    default: 
      return 'Something go wrong'
  }
};

console.log(calculateFigureArea("circle", 10, 15));


///////////////////////////////////////////////////////////////////////////////////
//TASK 3 Arrays
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
console.log(sortedArray)


///////////////////////////////////////////////////////////////////////////////////
//TASK 4 Array Methods
//////////////////////////////////////////////////////////////////////////////////

// Task 1 - sort an array with numbers                            //work
const arrayNums = [7,101,3,1,9,11,100,111]
function sortArray(array) {
  return array.sort((a, b) => a - b)
}
console.log(sortArray(arrayNums))

// Task 2 - filter an array of strings and keep only           //work
// a string, that doesn't contain the word 'test'
const stringsArray = [
  'one-test', 'cat', 'parrot',
  'banana', 'test-dog', 'dog'
]
function filterStringsArray(array) {
  return array.filter(item => !item.match('test'))
}
console.log(filterStringsArray(stringsArray))

// Task 3 - find sum of numbers in array using .reduce()      //work
const numsArray = [
  1, 3, 5, 10, 19, 100, 200, 33,
]
function sumNumbersInArray(array) {
  return array.reduce((total, item) => total + item, 0)
}
console.log(sumNumbersInArray(numsArray))

// Task 4 - filter items, where a > 5 and extend with              //work
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
console.log(filterAndExtendArrayItems(arrayItems))

// Task 5 - merge arrays and remove duplicates                       ///work
const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];
function mergeArraysWithoutDuplicates(array1, array2) {
  return [...new Set([...array1, ...array2])]
}
console.log(mergeArraysWithoutDuplicates(arNum, arNum2))


///////////////////////////////////////////////////////////
//TASK 5 Loop Methods
//////////////////////////////////////////////////////////

// Task 1 - find sum of all number in 2 arrays                                 ///Work///
const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
function sumNumsInArrays(array1, array2) {
  const newArr = [...array1, ...array2];
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
      sum += newArr[i]
  }
  return sum;
}
console.log(sumNumsInArrays(arrayNums1, arrayNums2))

// Task 2 - Using a 'for' loop print all even                                 ///Work///But not like need
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
function printEvenNumbers(n) {
  const evenNumbers = []
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0){
      evenNumbers.push(i)
    }
  }
  return evenNumbers.join(', ');
}
console.log(printEvenNumbers(22));

// Task 3 - Using a 'for' loop output the elements in reverse order        ///work///
const arr = [
  43, "what", 9, true, "cannot", false, "be", 3, true
];
function reverseArrayItems(array) {
  let reverse = [];
  for (let i = 0; i < array.length; i++) {    //true,   3,   be
    reverse[i] = array[(array.length - 1) - i] // 8 - 0, 8 -1, 8 - 2
                    //індекс який рахується з нуля
}
return reverse
}
console.log(reverseArrayItems(arr))



// Task 4 - Add up each element in the same position and                   ///Work///
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
let array1   = [4, 6, 7];
let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
function sumNumsSamePosition(array1, array2) {
  let sum = array1.map((a, i) => a + array2[i]);
  return sum;
}
console.log(sumNumsSamePosition(array1, array2))


// Task 5 - find sum of all number in array using 'while' loop      ///Work///
const arr = [4, 6, 7, 10]
function sumNums(array) {
  let i = 0; 
  let sum = 0;
  while(i < array.length) {
      sum += + array[i]; 
      i++;
  }
  return sum
}

console.log(sumNums(arr))


// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length >= 4 and without the word 'error'
const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error']
function filterArrayWithStrings(array) {
  const result = array.filter(words => words.length >= 4 && !words.includes('error'))
  return result
}
// filterArrayWithStrings(strArr)
console.log(filterArrayWithStrings(strArr))


// Task 7 - given a number n calculate the factorial of                    ///Work///
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
function factorial(n) {
  let counter = 1;
  while (n >= 1) {
    counter *= n;
    n--;
  }
  return counter;
}

console.log(factorial(5))


///////////////////////////////////////////////////////////
//TASK 6 String Methods
//////////////////////////////////////////////////////////


// Tasks 1 -  convert array of strings
// from lowercase to uppercase
const arr = ['human', 'people', 'animal', 'planet']
function convertToUppercase(array) {
  const upperString = array.map(item => item.toUpperCase())
  return upperString
}
console.log(convertToUppercase(arr))

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
function calculateLetters(string, letter) {
  // return string.split(letter).length - 1; //Simple way
  // let count = 0;
  // letter = letter.charAt(0); 
  //   for(let i = 0; i < string.length; ++i) {
  //       if(letter === string.charAt(i)) {
  //           ++count;
  //       }
  //   }
  //   return count;
  let count = 0;
  for (let value of string) {
    if (value == letter)
    count++;
  }
  return count;
}
console.log(calculateLetters('Helllllo', 'e'))

// Task 3 - replace numbers with spaces
// in the provided string
let str = 'I9like5JS' //=> 'I like JS'
function replaceNumbers(string) {
  return str = string.replace(/[0-9]/g, " ");
  
}
console.log(replaceNumbers(str))

// Task 4 - sort strings in array
const arr = [11, 2, 101, 3, 4, 5, 1, 6]
const arr2 = ['nemo', 'sea', 'avengers', 'boolean']
function sortArray(array) {
  // return array.sort((a, b) => a - b);
  return array.sort();
}

console.log(sortArray(arr2))

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
const arr = ["osmos", "uterque", "water", "crop", "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
function buildStringUsingIndex(array, index) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
      let str = array[i];
      if(str.length > index) {
        result += str[index]
      } else  {
        result += ' '
      }
      // result += (str.length > index) ? str[index] : ' ';
  }
  return result;
}
console.log(buildStringUsingIndex(arr, 1))


// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
function palindromeValidator(str) {
  // if (str === str.split('').reverse().join('')) {
  //   return 'The string is palindrome'
  // } else {
  //   return 'The string is not palindrome'
  // }

  for(let i = 0; i < str.length; i++) {
    if(str[i] !== str[str.length - 1] ){
      return 'The string is not palindrome'
    } else {
      return 'The string is palindrome'
    }
  }
}

console.log(palindromeValidator('ohoho'))



