const user = {username: 'john', password: '1234', email: ''};
const {username, ...values } = user;
console.log(username); // john
console.log(values); // { password: '1234', email: '' }