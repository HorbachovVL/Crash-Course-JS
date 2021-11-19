/////////////////Function Constructor///////////////////////
function Animals(species, color, name) {
    this.species = species;
    this.name = name;
    this.color = color;
}

const mouse = new Animals('Mouse', 'Gray', 'Enny');
const rabbit = new Animals('Rabbit', 'White', 'Dizy');

Animals.prototype.whoIam = function () {
    console.log(`Hello, I am a ${this.species}`);
}


console.log(mouse)
console.log(rabbit)
mouse.whoIam()


//////////////////////////////Class/////////////////////////
class Animal {
    constructor(name, color, species) {
        this.species = species;
        this.name = name;
        this.color = color;
        
    }
    whoIam() {
        console.log(`Hello, I am a ${this.species}`);
    }
}

class Dog extends Animal {
    constructor(name, color, species) {
        super(name, color, species)
    }
    say() {
        Dog.whoIam.call(this)
        // Animal.prototype.whoIam.call(this)
        // Animal.prototype.whoIam.apply(this)    
    }
    run() {
        console.log(`I am a ${this.species} and i run`)
    }

}

const dog = new Dog('Jack', 'Black', 'Dog')
console.log(dog)
dog.say()
dog.run()

class Cat extends Animal {
    constructor(name, color, species) {
        super(name, color, species)
    }
}

class Horse extends Animal {
    constructor(name, color, species) {
        super(name, color, species)
    }
}

class Fish extends Animal {
    constructor(name, color, species) {
        super(name, color, species)
    }
}

class Bird extends Animal {
    constructor(name, color, species) {
        super(name, color, species)
    }
}

const cat = new Cat('Murchyk', 'White', 'Cat')
const horse = new Horse('Bucyfal', 'Brown', 'Horse')
const fish = new Fish('Goldi', 'Golden', 'Fish')
const bird = new Bird('Kevin', 'Green', 'Parrot')

console.log(cat)
console.log(horse)
console.log(fish)
console.log(bird)

  
