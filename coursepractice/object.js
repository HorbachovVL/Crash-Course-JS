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