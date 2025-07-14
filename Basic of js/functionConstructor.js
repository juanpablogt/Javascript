function Person(name, age, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person("John", 30, "Doe");
const person2 = new Person("Jane", 25, "Smith");

console.log(person1);
console.log(person2);