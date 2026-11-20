
const btnFamosos = document.getElementById("btnFamosos");
const btnGastronomia = document.getElementById("btnGastronomia");

const famosos = document.getElementById("famosos");
const gastronomia = document.getElementById("gastronomia");

function mostrarSeccion(seccion) {

    // Ocultar las secciones anteriores
    famosos.classList.add("oculto");
    gastronomia.classList.add("oculto");

    // Mostrar la sección seleccionada
    seccion.classList.remove("oculto");

    // Desplazarse hasta ella
    seccion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Botón de famosos
btnFamosos.addEventListener("click", function() {
    mostrarSeccion(famosos);
});

// Botón de gastronomía
btnGastronomia.addEventListener("click", function() {
    mostrarSeccion(gastronomia);
});

// Botón para regresar desde famosos
document.getElementById("volverFamosos")
.addEventListener("click", function() {

    famosos.classList.add("oculto");

    document.querySelector(".presentacion")
    .scrollIntoView({ behavior: "smooth" });

});

// Botón para regresar desde gastronomía
document.getElementById("volverGastronomia")
.addEventListener("click", function() {

    gastronomia.classList.add("oculto");

    document.querySelector(".presentacion")
    .scrollIntoView({ behavior: "smooth" });

});
