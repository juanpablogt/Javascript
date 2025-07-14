class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`makes a noise.`);
    }
}

class dog extends animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new dog("Rex", 5, "Labrador");
console.log(myDog);
myDog.speak(); // Rex barks.