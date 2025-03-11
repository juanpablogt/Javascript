function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['oscar', 'jose', 'ricardo']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
