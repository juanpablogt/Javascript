const title = document.getElementById("welcome");
title.textContent = "Welcome to My Awesome Website";

title.style.color = "red";

const nav = document.querySelector("#main-nav");
nav.style.backgroundColor = "lightblue";
nav.style.fontSize = "40px";

const button = document.querySelector("#boton");

button.addEventListener("click", () => {
  nav.classList.toggle("hidden");
    // Toggle the visibility of the navigation menu
  button.textContent = nav.classList.contains("hidden") ? "mostrar" : "ocultar";
    // Change button text based on visibility
});

