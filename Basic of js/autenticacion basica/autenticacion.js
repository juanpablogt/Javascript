const usersDatabase = [
    {
        username: 'user1',
        password: '123'
    }
    ,
    {
        username: 'user2',
        password: '456'
    }
];

const userTimeline = [
    {
        username: "Estefany",
        timeline: "Me encanta la programación",
    },
    {
        username: "Juan",
        timeline: "Hoy es un buen día para aprender algo nuevo",
    },
    {
        username: "Maria",
        timeline: "JavaScript es increíble",
    }
];

const username = prompt("Ingrese su nombre de usuario:");
const password = prompt("Ingrese su contraseña:");

function authenticateUser(username, password) {
    const user = usersDatabase.find(user => user.username === username && user.password === password);
    if (user) {
        return true;
    } else {
        return false;
    }
}
function singIn(username, password) {
    if (authenticateUser(username, password)) {
        alert(`Bienvenido ${username}!`);
        console.log(userTimeline);
    }else {
        alert("Usuario o contraseña incorrectos.");
    }
}

singIn(username, password);
