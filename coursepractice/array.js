let arr = ['one', 'two', 3, 4];

console.log(arr);
console.log(...arr);

const arr1 = [1, 2 , 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr4);

const arrr = ['Bobby', 'Peter'];
console.log(arrr);
const [a, b] = arrr;
console.log(a, b);


const arr4 = [3, 5, 1, 7, -10, 4];
arr4.sort();
console.log(arr4)
for (let i = 0; i < arr4.length; i += 1) {
    for (let j = i + 1; j < arr4.length; j += 1) {
        if (arr4[j] < arr4[i]) {
            [arr4[j], arr4[i]] = [arr4[i], arr4[j]]
        }
        // let a = arr4[i];
        // let b = arr4[j];

        // if (b < a) {
        //     [b, a] = [a, b];
        //     arr4[i] = a;
        //     arr4[j] = b;
        // }
        // console.log(a, b);
    }
}
console.log(arr4);

///////////////////////////////////////////////////////////////////////////

const medals = ['gold', 'silver', 'bronze'];


medals.forEach((item, i) => {
    console.log(`I win ${item} and i stand at ${i + 1} position`);
});
console.log(medals.reverse());

const addremove = ['apple', 'orange', 'strawberry'];
console.log(addremove.slice(1, 3));
addremove.push('banana');
console.log(addremove);
addremove.pop();
console.log(addremove);
addremove.shift();
console.log(addremove);
addremove.unshift('tomato');
console.log(addremove);
addremove.slice(1, 2);
console.log(addremove);

///////////////////////////////8.11.21/////////////////////////////
const array = [
    {name: 'Vova', age: 32},
    {name: 'Dima', age: 33},
    {name: 'Misha', age: 31},
];

const name = array.map(({ name }) => name);
// const name = array.map(obj => {
//     return obj.name;
// });
console.log(name);

const numbers = [2, 4, 6, 8];
const allEven = numbers.every(item => {
     return item % 2 === 0;
});
const sumAll = numbers.reduce((accumulator, item) => {
    return accumulator + item
}, 0);
console.log(sumAll);
console.log(allEven);

const someNum = [22, 34, 9, 15, 60, 3, 101]
// const someNumSort = someNum.sort((a, b) => a - b);
const someNumSort = someNum.sort((a, b) => b - a);
// console.log(someNum.sort())
console.log(someNumSort);