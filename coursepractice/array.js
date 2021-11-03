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
console.log(arr4)