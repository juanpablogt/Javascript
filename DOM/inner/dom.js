const seccion1 = document.getElementById("content");

seccion1.innerHTML = '<p>Contenido de la sección 1</p>'

const lista = document.getElementById("lista");

lista.insertAdjacentHTML("beforeend", "<li>Elemento 1</li>");
lista.insertAdjacentHTML("afterbegin", "<li>Elemento 2</li>");
lista.insertAdjacentHTML("beforebegin", "<li>Elemento 3</li>");
lista.insertAdjacentHTML("afterend", "<li>Elemento 4</li>");

lista.removeChild(lista.firstElementChild);