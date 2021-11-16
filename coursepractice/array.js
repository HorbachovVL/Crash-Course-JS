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


//////////////////////////9.11.21///////////////////////////////////////

const fruits = ['apple', 'banana', 'pineaple', 'strawbery'];
const vegetables = ['carrot', 'potato', 'tomato'];
const numByTwo = [9, 11, 15, 7];
// let newNum = numByTwo.map(item => item * 2);
// console.log(newNum);
// fruits.pop();
// fruits.push('lemon');
// fruits.shift();
// fruits.unshift('orange')
// let newFood = fruits.concat(vegetables);
// console.log(newFood);
// fruits.forEach((item, i) => {
//     console.log(item, i);
// });
// let newVegetables = vegetables.map(item => item + ' It is a vegetable');
// console.log(newVegetables);
// console.log(fruits.slice(2, 3));
// console.log(fruits.sort());
// console.log(numByTwo.sort((a, b) => a - b));
// console.log(vegetables.indexOf('potato'));
// console.log(fruits.filter(item => item.length > 7));
// console.log(numByTwo.filter(item => item > 10));
console.log(fruits.join('-'));

///////////////////10.11.21/////////////////////////////////////////////

// const people = [
//     {name: 'John', age: 50, budget: 150000},
//     {name: 'David', age: 42, budget: 250000},
//     {name: 'Jessi', age: 30, budget: 15000},
//     {name: 'Lara', age: 20, budget: 10000}
// ]

//forEach
// people.forEach(function(person, index, peopArr) {
//     console.log(person);
//     console.log(index);
//     console.log(peopArr);
// })

// people.forEach(person => console.log(person));

//map
const newPeople = people.map(person => {
    return person.name;
})

console.log(newPeople);

//filter
// const more40 = [];

// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 40) {
//         more40.push(people[i])
//     }
// }

const more40 = people.filter(person => {
    return person.age >= 40;
})

console.log(more40)


const people = [
    {name: 'John', age: 50, budget: 150000},
    {name: 'David', age: 42, budget: 250000},
    {name: 'Jessi', age: 30, budget: 15000},
    {name: 'Lara', age: 20, budget: 10000}
]

//reduce
// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }
const amount = people.reduce((total, person) => {
    return total + person.budget
}, 0)

console.log(amount)

//find
const nameDavid = people.find(people => people.name === 'David')

console.log(nameDavid)

//findIndex
const indexLara = people.findIndex(people => people.name === 'Lara')

console.log(indexLara)

/////////////////////
const people = [
    {name: 'John', age: 50, budget: 150000},
    {name: 'David', age: 42, budget: 250000},
    {name: 'Jessi', age: 30, budget: 15000},
    {name: 'Lara', age: 20, budget: 10000}
]

const newPerson = people
    .filter(person => person.budget > 100000)
    .map(person => {
        return {
            name: `${person.name} (${person.age})`,
            budget: person.budget,
            // sum: person.age + person.budget
        }
    })
    // .reduce((total, person) => total + person.budget, 0)


console.log(newPerson)



//////////////////////////////////////////////16.11.21/////////////////////////////////////////////////////

const country = [
    {name: 'Ukraine', capital: 'Kyiv', population: 42},
    {name: 'Poland', capital: 'Warsaw', population: 40},
    {name: 'Germany', capital: 'Berlin', population: 82},
    {name: 'Italy', capital: 'Rome', population: 60},
    {name: 'USA', capital: 'Washington', population: 320},
]

//////////////////////////////////////forEach//////////////////////////////////////////////////////////////

country.forEach((item, index, countr) => {
    // console.log(item);
    // console.log(index);
    // console.log(countr);
})

/////////////////////////////////////Map//////////////////////////////////////////////////////////////////

// const newCountry = country.map((item, index) => {
//     // return {name: item.name, capital: item.capital, population: item.population, number: index}
//     return item.population / 2;
    
// })
// console.log(newCountry)


////////////////////////////////////Filter////////////////////////////////////////////////////////////////

// const newCountry = country.filter(item => item.population > 50 && item.capital.includes('n'))

// console.log(newCountry)


///////////////////////////////////Reduce////////////////////////////////////////////////////////////////

// const newCountryPopulation = country.reduce((total, item) => {  //total рівне нулю,або якомось іншому значені,що йде другим параметром
//     return total + item.population
// }, 0)

// console.log(newCountryPopulation)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const countryNew = country
.filter(item => item.population < 50)
.map(item => {
    return {
        countryName: item.name,
        countryPopulation: item.population
    }
})

console.log(countryNew)