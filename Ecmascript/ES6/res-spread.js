let fruits = ['apple', 'banana', 'orange'];
let [a, b, c] = fruits;
console.log(a,b); // apple
console.log(a,fruits[2]); // apple orange

let user = {
    name: 'Oscar',
    age: 32,
    country: 'CO'
}
let {name, age, country} = user;
console.log(name, age); // Oscar 32


// spred operator

let person = { name: 'Oscar', age: 32};
let country2 =  'CO';

let data = {id:1,...person, country2};
console.log(data); // {name: "Oscar", age: 32, country2: "CO"}

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,2,3,4,5); // 3