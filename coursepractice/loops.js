for (let i = 1; i <= 10; i++) {
    console.log(i)
};

let i = 1
while(i <= 5) {
    console.log(i);
    i++;
};

do {
    console.log(i);
    i++;
} while (i <= 15);


/////////////////////9.11.21/////////////////////////////////////
let str = 'Hello world'

for (let i = 0; i < str.length; i++) {
    console.log(i)
}

let i = 0;

while (++i < 5) {
    console.log(i)
}

while (i++ < 5) {
    console.log(i)
}

let i = 0;

do {
    console.log('Hello');
    i++;
} while (i < 5);
