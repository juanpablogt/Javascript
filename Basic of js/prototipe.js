class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(`makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, species, breed) {
        super(name, species);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog("Rex", "Canine", "Labrador");

Dog.prototype.rumir = function() {
    console.log(`${this.name} is rumbling.`);
}

