function sum(num1, num2){
    return num1 + num2;
}

function prin(num1, num2, callback){
    return callback(num1, num2);
}

console.log(prin(5, 5, sum)); // 10