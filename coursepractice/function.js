let newFunc = function() {
    let i = 10;
    return function() {
        return i;
    };
};

let anotherFunc = function() {
    let i = 20;
    console.log(newFunc()())
}
anotherFunc();


/////////////callback////////////////////////////
function fn (callback) {
    console.log('fn');
    callback();
}

const sayHello = () => {
    console.log('Hello');
}
fn(sayHello);

function repeat(count, callback) {
    for (let i = 0; i < count; i++) {
        callback();
    }
}

function sayHello() {
    console.log('Hello');
}
function sayBye() {
    console.log('Bye');
}

repeat(5, sayHello);
repeat(3, sayBye);

///////////////////////////////////////////////
function filter(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i])
        }
    }

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < 4) {
    //         result.push(arr[i])
    //     }
    // }
    return result;
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filter(numbers, x => x < 4));

const persons = [
    {
        name: 'Vova',
        age: 32,
    },
    {
        name: 'Oleh',
        age: 22,
    },
    {
        name: 'Ivan',
        age: 15,
    },
];
console.log(filter(persons, ({ age }) => age > 15));

//////////////////////////////////////////////////////
const funct = (a, b, ...rest) => {
    console.log(rest)
    return a + b;
}
console.log(funct(5, 10, 55, 99, 'num', 'sum'));

const newHuman = {
    name: 'Vova',
    age: 32
};

////////////////////////////////////////////
const sayHello = (obj) => {
    // const name = obj.name;
    // const age = obj.age;
    const {name, age} = obj;
    console.log(`Hello my name is ${name} and my age is ${age}`);
    // console.log(`Hello my name is ${obj.name} and my age is ${obj.age}`);
}
sayHello(newHuman);

////////////////////////////////////////////////////////////
function counter() {
    let x = 0;

    function increment() {
        console.log(x++);
    }
    return increment;
}

const counter1 = counter();
const counter2 = counter();

counter1();
counter1();

counter2();
counter2()


//////////////////////8.11.21////////////////////////////
const human = {
    name: 'Oleh',
    age: 100
}

function extendObject(key, value, obj = {}) {
    const newObj = Object.assign({}, obj);
    newObj[key] = value;
  
    return newObj;
}

console.log(extendObject('name', 'Oleh', human))

function valueByKeyInObject(key, obj = {}) {
    const newObj = obj[key];
    return newObj;
}

console.log(valueByKeyInObject('name', human));

const music = {
    band: 'Evanescence',
    vocalist: 'Amy Lee'
};

const addNew = (key, value, obj) => {
    const newObj = Object.assign({}, obj);
    newObj[key] = value;

    return newObj;
}

console.log(addNew('FoundYear', 1995, music));


const rockBands = {
    name: ['Evanescence', 'Amaranthe', 'Halestorm'],
    vocalist: ['Amy Lee', 'Elyze Ryd', 'Lzzy Hale'],
}
// rockBands.yearCreate = [1995, 2008, 1997];
function addTeYarOfCreation(key, value, obj) {
    const newBands = Object.assign({}, obj);
    newBands[key] = value;

    return newBands;
}

console.log(addTeYarOfCreation('yearCreate',[1995, 2008, 1997], rockBands));
console.log(rockBands);


const sum = (a, b) => a + b;
const sum2 = (a, b) => {
    return a + b;
};
function sum3(a, b) {
    return a + b;
};
const sum4 = function(a, b) {
    return a + b;
};

function saySomething(sm) {
    sm();
};
saySomething(function() {
    console.log('Hello');
});

