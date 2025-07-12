const numeroSecreto = Math.floor(Math.random() * 10 + 1);
let numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10:"));

while (numeroJugador !== numeroSecreto) {
    alert("Número incorrecto. Inténtalo de nuevo.");
    numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10:"));
}
alert("¡Felicidades! Has adivinado el número secreto: " + numeroSecreto);