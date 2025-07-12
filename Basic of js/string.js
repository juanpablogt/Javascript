let string1 = 'hello';
let string2 = "Juan Pablo";
let string3 = `com vas?`;

// forma 1 de comentar
let string4 = `${string1}, ${string2}, ${string3}`;
// console.log(string4);

// forma 2 de comentar
let string5 = string1 + ', ' + string2 + ', ' + string3;
// console.log(string5);

// contar letras de un string
let miName = 'Juan Pablo';
// console.log(miName.length);
let miLastName = 'Gonzalez Trejos';
// console.log(miLastName.length);

// poner todo en mayuscula o minuscula
console.log(miName.toUpperCase());
console.log(miLastName.toLowerCase());

// substring
console.log(miName.substring(0, 4)); // Juan