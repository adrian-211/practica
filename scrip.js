function cambiarTema() {
    document.body.classList.toggle("oscuro");

    // Guardar la preferencia en localStorage
    if (document.body.classList.contains("oscuro")) {
        localStorage.setItem("tema", "oscuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}

// Mantener el tema elegido aunque se recargue la página
window.onload = function () {
    if (localStorage.getItem("tema") === "oscuro") {
        document.body.classList.add("oscuro");
    }
};