///////////////////////ES 5/////////////////////
function Human(name, age) {
    this.name = name;
    this.age = age;
};

Human.prototype.sayHello = function () {
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`)
}

const volodymyr = new Human('Volodymyr', 32);
const roman = new Human('Roman', 30)

console.log(roman);
volodymyr.sayHello();

////////////////////////////////////////////////////////////////////////////////

function Human1(name, age) {
    this.name = name;
    this.age = age;
};

Human1.prototype.sayHello = function () {
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`)
}

function Doctor (name, age) {
    Human1.call(this, name, age);
};
Doctor.prototype = Object(Human1.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.heal = function() {
    console.log(`I'am healing now`);
}

const drjunior = new Doctor('Junior', 25);
console.log(drjunior);
drjunior.sayHello();
drjunior.heal();

////////////////ES 6///////////////////////////

class NewHuman {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    sayHello() {
        console.log(`Hello my name is ${this.name} my age is ${this.age} and i living in ${this.city}`)
    }
}

class NewDoctor extends NewHuman {
    constructor(name, age, city, travel) {
        super(name, age, city, travel)
        this.travel = travel;
    }
    sayBye() {
        NewHuman.prototype.sayHello.call(this);
        console.log(`I ${this.name} say Bye`)
    }
}

const ivan = new NewHuman('Ivan', 20, 'Lviv');
console.log(ivan);
ivan.sayHello();
const doc = new NewDoctor('Who', 200000, 'Universe', 'Earth');
console.log(doc);
doc.sayBye();


class Ford  {
    constructor(model, color) {
        this._model = model;
        this._color = color;
    }
    get model() {
        return this._model
    }
    set color(color) {
        this._color = color;
    }
}

const fusion = new Ford('Fusion', 'Gray');
console.log(fusion)

/////////////////////////9.11.21/////////////////////////////////////////
class Car {
    constructor(manufacture, model, year, color, engine, fueltype) {
        this.manufacture = manufacture;
        this.model = model;
        this.year = year;
        this.color = color;
        this.engine = engine;
        this.fueltype = fueltype;
    }
    aboutCar() {
        console.log(`The ${this.manufacture} ${this.model} was produce in ${this.year},have a beutiful ${this.color} color,reliable ${this.engine} engine and consume ${this.fueltype}`)
    }
}

const ford = new Car('Ford', 'Edge', 2021, 'White', 'EcoBoost 2.5L', 'Gas');
console.log(ford);
ford.aboutCar()

class newCar extends Car {
    constructor(manufacture, model, year, color, engine, fueltype, clas) {
        super(manufacture, model, year, color, engine, fueltype, clas)
        this.clas = clas;
    }
}

let dodge = new newCar('Dodge', 'Ram 3500', 2021, 'Black', 'Hemi 6.2L', 'Oil', 'Pick Up');
console.log(dodge);
dodge.aboutCar()