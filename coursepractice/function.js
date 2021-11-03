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
let func = function(callback) {
    let name = 'Vova';
    callback(name);
}

func(function(n){
    console.log(`Hello ${n}`);
});

function greeting(name) {
    console.log(`Hello ${name}`);
};

function processUserInput(callback) {
    let name = 'Volodymyr';
    callback(name);
};

processUserInput(greeting);

const funct = (a, b, ...rest) => {
    console.log(rest)
    return a + b;
}
console.log(funct(5, 10, 55, 99, 'num', 'sum'));

const newHuman = {
    name: 'Vova',
    age: 32
};

//деструктуризація
const sayHello = (obj) => {
    // const name = obj.name;
    // const age = obj.age;
    const {name, age} = obj;
    console.log(`Hello my name is ${name} and my age is ${age}`);
    // console.log(`Hello my name is ${obj.name} and my age is ${obj.age}`);
}
sayHello(newHuman);