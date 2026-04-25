// Muestra un mensaje de bienvenida según la hora del día
function mostrarBienvenida() {
    const hora = new Date().getHours();
    let saludo = "";

    if (hora >= 6 && hora < 12) {
        saludo = "¡Buenos días! Bienvenido a mi portafolio.";
    } else if (hora >= 12 && hora < 18) {
        saludo = "¡Buenas tardes! Bienvenido a mi portafolio.";
    } else {
        saludo = "¡Buenas noches! Bienvenido a mi portafolio.";
    }

    document.getElementById("bienvenida").textContent = saludo;
}

// Muestra u oculta la sección de información extra al hacer clic en el botón
function configurarBotonExtra() {
    const boton = document.getElementById("btn-extra");
    const infoExtra = document.getElementById("info-extra");

    boton.addEventListener("click", function () {
        // Si está oculto lo muestra, si está visible lo oculta
        if (infoExtra.style.display === "block") {
            infoExtra.style.display = "none";
            boton.textContent = "Ver más sobre mí";
        } else {
            infoExtra.style.display = "block";
            boton.textContent = "Ver menos";
        }
    });
}

// Ejecuta las funciones cuando la página carga
mostrarBienvenida();
configurarBotonExtra();
