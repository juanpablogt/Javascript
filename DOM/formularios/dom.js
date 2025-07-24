const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario
    const name = form.elements['name'].value;
    console.log(name); // Muestra el valor del campo 'name' en la consola
});
