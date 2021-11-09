let aa = 10;
let bb = 20;
let cc = 30;
let dd = 40;
if (aa < bb && cc < dd) {
    console.log(`${aa} smaller than ${bb} and ${cc} smaller than ${dd}`)
} else {
    console.log('Oops');
}

if (aa > bb || cc < dd) {
    console.log(`${aa} smaller than ${bb} and ${cc} smaller than ${dd}`)
} else {
    console.log('Oops');
}

if (aa > bb && cc < dd) {
    console.log(`${aa} smaller than ${bb} and ${cc} smaller than ${dd}`)
} else {
    console.log('Oops');
}

if (aa > bb || cc < dd) {
    console.log(`${aa} smaller than ${bb} and ${cc} smaller than ${dd}`)
} else {
    console.log('Oops');
}

// const number1 = 100;

if (number1 > 100) {
    console.log('Bigger');
} else if (number1 < 100) {
    console.log('Smaller');
} else {
    console.log('Equal')
}

const number1 = 101;
switch(number1) {
    case 100: {
        console.log('Equal');
    }
    break;
    case 99: {
        console.log('Smaller');
    }
    break;
    case 101: {
        console.log('Bigger')
    }
    break;
    default: {
        console.log('Oops')
    }
}


///////////////////////////9.11.21//////////////////////////////
const country = 'Lviv'

switch(country) {
    case 'Ukraine':
    case 'Lviv':
    case 'Sudova Vyshnya':
        console.log('I live here');
        break;
    case 'Poland':
        console.log('I also live here');
    case 'Italy': 
        console.log('I want visit');
        break;
    default: 
        console.log('I stay home');   
};

let some = 'Plan';

if (some.length > 5 && typeof some === 'string' ) {
    console.log('It is a big string');
} else if (some.length < 5 || typeof some === 'string') {
    console.log('It is a string');
} else {
    console.log('Error');
}

