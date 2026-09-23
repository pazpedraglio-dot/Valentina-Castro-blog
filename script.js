function mostrarSeccion(id) {
    const secciones = document.querySelectorAll(".card");

    // Ocultar todas las secciones
    secciones.forEach(sec => {
        sec.classList.add("oculto");
        sec.style.opacity = "0";
    });

    // Mostrar la sección seleccionada
    const activa = document.getElementById(id);

    if (activa) {
        activa.classList.remove("oculto");

        setTimeout(() => {
            activa.style.opacity = "1";
        }, 50);

        const yOffset = -80;
        const y = activa.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    }
}
