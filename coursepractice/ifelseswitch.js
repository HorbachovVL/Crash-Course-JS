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