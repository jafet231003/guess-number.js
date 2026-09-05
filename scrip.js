const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");
const botonAdivinar = document.getElementById("btnAdivinar");
const inputIntento = document.getElementById("inputIntento");
const historial = document.getElementById("historial");
const botonReiniciar = document.getElementById("btnReiniciar");

// Número secreto
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;
const maxIntentos = 10;


// Función para verificar el intento
function verificarIntento() {

    const intento = Number(inputIntento.value);

    // Validar número
    if (intento < 1 || intento > 100 || inputIntento.value === "") {
        mensaje.textContent = "Ingresa un número del 1 al 100.";
        mensaje.style.color = "red";
        return;
    }

    // Aumentar intentos
    intentos++;

    contador.textContent = "Intentos: " + intentos + " / " + maxIntentos;

    // Agregar al historial
    historial.textContent += intento + " ";

    // Si adivina
    if (intento === numeroSecreto) {

        mensaje.textContent = "🎉 ¡Correcto! Adivinaste el número.";
        mensaje.style.color = "green";

        botonAdivinar.disabled = true;
        inputIntento.disabled = true;

        botonReiniciar.style.display = "block";

        return;
    }

    // Dar pista
    if (intento > numeroSecreto) {

        mensaje.textContent = "📉 El número es muy alto.";
        mensaje.style.color = "red";

    } else {

        mensaje.textContent = "📈 El número es muy bajo.";
        mensaje.style.color = "turquoise";
    }

    // Game Over
    if (intentos >= maxIntentos) {

        mensaje.textContent = "💀 GAME OVER";
        mensaje.style.color = "red";

        botonAdivinar.disabled = true;
        inputIntento.disabled = true;

        botonReiniciar.style.display = "block";

        return;
    }

    // Limpiar input
    inputIntento.value = "";
    inputIntento.focus();
}


// Botón Adivinar
botonAdivinar.addEventListener("click", verificarIntento);


// Presionar ENTER
inputIntento.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        verificarIntento();
    }

});


// Botón Reiniciar
botonReiniciar.addEventListener("click", function() {

    // Generar nuevo número
    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // Reiniciar intentos
    intentos = 0;

    contador.textContent = "Intentos: 0 / " + maxIntentos;

    // Limpiar historial
    historial.textContent = "Historial: ";

    // Limpiar mensaje
    mensaje.textContent = "";

    // Activar controles
    botonAdivinar.disabled = false;
    inputIntento.disabled = false;

    // Ocultar botón reiniciar
    botonReiniciar.style.display = "none";

    // Limpiar y enfocar
    inputIntento.value = "";
    inputIntento.focus();
});