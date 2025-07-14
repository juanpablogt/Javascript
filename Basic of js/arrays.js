const arreglo = [1, 2, 3, 4, 5];
arreglo.push(6);

const arreglo2 = [7, 8, 9];

const arreglo3 = arreglo.concat(arreglo2);

for (let i = 0; i < arreglo3.length; i++) {
    console.log(arreglo3[i]);
}