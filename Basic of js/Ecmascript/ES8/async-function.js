const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Async Hello World'), 2000)
        : reject(new Error('Test Error'))
    }
    );
}

const anotherFunction = () => {
    const something =  fnAsync();
    console.log(something);
    console.log('End');
}
console.log('Before');
anotherFunction();
console.log('After');