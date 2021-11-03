/*
x += y	x = x + y
x -= y	x = x - y
x *= y	x = x * y
x /= y	x = x / y
*/

let n = 5;
n += 5; // n = n + 5 //10
console.log(n);
n += 9; // n = n + 9 //19
console.log(n);

let b = 5;
let c = 10;
console.log(b == 5); //true
console.log(b == '5'); //true
console.log(b === '5'); //false
console.log(b !== '5'); //true
console.log(b > 5); // false
console.log(b < 5); //false
console.log(b >= 5); //true
console.log(b >= 5); //true
console.log(b >= 5 && c >= 10); //true
console.log(b >= 5 || c < 10); //true
console.log(b > 5 && c < 10);  //false
console.log(b > 5 || c < 10); //false

const userName = 'Volodymyr';
const discount = userName === 'Volodymyr'? '50%': '30%';
console.log(discount);

