let user = {
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

let obj = (name, age) => {
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