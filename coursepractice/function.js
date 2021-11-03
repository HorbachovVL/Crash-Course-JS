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