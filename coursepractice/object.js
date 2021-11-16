const Marvel = {
    createYear: 1939,
    mainCharecter: 'Captain America',
    owner: 'Disney'
}
console.log(Marvel.valueOf());
console.log(Marvel.toString());
console.log(Marvel.hasOwnProperty('createYear'));
// Object.freeze(Marvel);
Marvel.mainVillian = 'StepnWoolf';
console.log(Marvel);
console.log(Object.isFrozen(Marvel));

const DC = {
    createYear: 1934,
    mainCharecter: 'Superman',
    owner: 'WB'
}
console.log(Object.keys(DC));
console.log(Object.values(DC));
console.log(Object.entries(DC));

const newComics = Object.assign({}, DC);
// console.log(newComics);

const newDC = Object.create(DC);
console.log(newDC.createYear);

// DC['mainVillian'] = 'DarkSide';
if (DC.mainVillian === 'DarkSide') {
    DC.mainTeam = 'Justice League';
} else {
    DC.notIntresting = true;
}

console.log(DC);

Marvel.mainVillian = 'Tanos';
DC['mainVillian'] = 'DarkSide';
console.log(Marvel);
console.log(DC);

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

const user = {
    name: 'Volodymyr',
    age: 32,
    'I like': 'Gym',
    sayHi: function() {
        console.log('Hello');
    },
    sayBye() {
        console.log(`Bye,see you later ${this.name}`);
        console.log(`Your age is ${this.age}`);
    },
    inner: {
        someKey: 'Key'
    }
};
Object.keys(user).forEach(key => {
    console.log(key)
})


console.log(user.inner.someKey);
user.sayBye();

for (let key in user) {
    console.log(user[key]);
};
for (let key in user) {
    console.log(key);
};

console.log(Object.keys(user)); //ключ 
console.log(Object.values(user)); // значення
console.log(Object.entries(user)); // ключ + значення
Object.keys(user).forEach(key => {
    console.log(key, user[key])
})
//copy only link
let newUser = user;
newUser.surname = 'Horbachov';
console.log(user);
console.log(newUser);
console.log(user['name']);
console.log(user['I like']);

delete user.surname;
console.log(user);

const obj = (name, age) => {
    return {
        name,
        age,
    };
};

console.log(obj('Vova', 32));

const obj1 = {
    name: 'Vova'
};

const obj2 = {
    age: 32
};

const obj3 = {
    ...obj1,
    ...obj2
};
console.log(obj3);


/////////////////9.11.21//////////////////////////////
/////////////spread//////////////////////////////////

const cityUkraine = ['Lviv', 'Kyiv', 'Odessa', 'Harkiv', 'Dnipro'];
const cityEurope = ['Warsaw', 'Berlin', 'Prague','Rome', 'Paris'];

console.log(...cityUkraine);
const allCity = [...cityUkraine, 'New York', ...cityEurope];
console.log(allCity);

const cityPopulationEurope = {
    Kyiv: 3,
    Lviv: 1,
    Warsaw: 2,
};

const cityPopulationAsia = {
    Tokio: 20,
    Stambull: 15,
    Pekin: 30,
    Delli: 25
}

console.log({...cityPopulationEurope, ...cityPopulationAsia});

///////////////rest///////////////////////////////////////////

function sum(a, b, ...rest) {
    // console.log(rest)
    return a + b + rest.reduce((a, i) => a + i, 0);
};

const numbers = [1, 2, 3, 4, 5];
// console.log(sum(...numbers));

//деструктуризація
// const [a, b] = numbers;
const [a, b, ...other] = numbers;
console.log(a, b, other);

const person = {
    name: 'Misha',
    age: 31,
    city: 'Rohatyn',
    country: 'Ukraine'
}

const {name, age, ...adress} = person;
console.log(name, age, adress);

function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

// console.log(calcValues(40, 30))
// const result = calcValues(40, 30);
const [sum, sub] = calcValues(40, 30);
// const sum = result[0];
// const sub = result[1];
// const [sum, sub] = result;
console.log(sum, sub);


/////////////////////////////////////16.11.21/////////////////////////////////////////////////

////////////////////////////////////Map/////////////////////////////////////////////////////

const obj = {
    name: 'Volodymyr',
    age: 32,
    job: 'Test Engineer'
}

const entries = [
    ['name', 'Volodymyr'],
    ['age', 32],
    ['job', 'Test Engineer']
]

// console.log(Object.entries(obj)) //Turn Object into Array
// console.log(Object.fromEntries(entries)) //Turn Array into Object

const map = new Map(entries);
console.log(map.get('age'));
map
    .set('info', 'error')
    .set(obj, 'new value')
console.log(map);
console.log(map.get(obj))

////////////////////////////////////////////Set////////////////////////////////////////

const set = new Set([1, 2, 3, 5, 5, 6, 6, 8, 9])
set.add(10).add(20).add(30).add(20)
console.log(set)