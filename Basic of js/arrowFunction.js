const greeting = function(name) {
    return `Hello, ${name}!`;
}

// arrow function
const newgreeting = name => `Hi, ${name}!`;

// con mas de un parametro se ponen en paréntesis
const add = (a, b) => a + b;

// lexical binding
const fictionalcharacter = {
    name: 'uncle ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${fictionalcharacter.name} says: ${message}`);
    }
};

fictionalcharacter.messageWithTraditionalFunction('with traditional function');
fictionalcharacter.messageWithArrowFunction('with arrow function');