class user {

    greating() {
        return "Hello";

    }
}

const gndx = new user();
console.log(gndx.greating());
const bebeloper = new user();
console.log(bebeloper.greating());

class user {
    constructor() {
        console.log("Nuevo usuario creado");
    }
    greating() {
        return "Hello";
    }
}

const david = new user();

class user {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return "dice hola";
    }
    greating() {
        return `${this.name} ${this.speak()}`;
    }
}

const ana = new user("Ana");
console.log(ana.greating());

class user {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return "dice hola";
    }
    greating() {
        return `${this.name} ${this.speak()} y tengo ${this.age} años`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user("Ana", 25);
console.log(bebeloper1.greating());
console.log(bebeloper1.uAge);
bebeloper1.uAge = 26;
console.log(bebeloper1.uAge);   
