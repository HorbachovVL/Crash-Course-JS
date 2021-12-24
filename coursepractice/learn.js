let admin, name;
name = 'John';
admin = name;
console.log(admin)

let earth, visitor;


let name = "Ilya";

console.log( `hello ${1}` ); // ? hello 1
console.log( `hello ${"name"}` ); // ? hello name
console.log( `hello ${name}` ); // ? hello  Ilya

let a = 1, b = 1;

let c = ++a; // ? 2
let d = b++; // ? 1

let a = 2;

let x = 1 + (a *= 2); // 5

"" + 1 + 0    // 10
"" - 1 + 0    // 1
true + false  // 1
6 / "3"       // 2
"2" * "3"     // 6
4 + 5 + "px"  // 9px
"$" + 4 + 5   // $45
"4" - 2       // 2
"4px" - 2     //NaN
7 / 0         //infinity
"  -9  " + 5  // ' -9 5'
"  -9  " - 5  // 14
null + 1      // 1
undefined + 1 // NaN
" \t \n" - 2  //-2

let answer = 'ECMAScript'

if (answer === 'ECMAScript') {
    console.log('Yes')
} else {
    console.log('Do not know?ECMAScript')
}

let result;

if (a + b < 4) {
  result = 'Small';
} else {
  result = 'Big';
}

let a, b;
a = 2;
b = 3;

result = a + b < 4 ? "Small": "Big"
console.log(result)


let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Welcome';
} else if (login == '') {
  message = 'No Login';
} else {
  message = '';
}

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Welcome' :
  (login == '') ? 'No Login' :
  '';

  ( null || 2 || undefined ); // 2
  ( alert(1) || 2 || alert(3) ); // 1, 2
  ( 1 && null && 2 ); // null
  ( alert(1) && alert(2) ) // 1, undefined
  ( null || 2 && 3 || 4 ) // 3

  let age = 90;

  if(age >= 14 && age <= 90 ) {
      console.log('Ok')
  } else {
      console.log('No')
  }

  if(!(age >= 14 && age <= 90)) {
    console.log('No')
  } else {
    console.log('Ok')
  }

if (age < 14 || age > 90) {
    console.log('No')
  } else {
    console.log('Ok')
  }