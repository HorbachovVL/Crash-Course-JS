let user = {
    name: 'Volodymyr',
    age: 32,
    'I like': 'Gym',
    sayHi: function() {
        console.log('Hello');
    },
    sayBye() {
        console.log('Bye');
    }
};

for (let key in user) {
    console.log(key);
};