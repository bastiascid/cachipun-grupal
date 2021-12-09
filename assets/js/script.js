let puntosUsuario = 0;
let puntosCompu = 0;

const puntajeUsuario = document.getElementById('puntaje-usuario');
const puntajeComputador = document.getElementById('puntaje-computador');
const tableroPuntaje = document.querySelector('.tablero-puntaje');
const resultado = document.querySelector('.resultado > p');
const piedraDiv = document.getElementById('piedra');
const papelDiv = document.getElementById('papel');
const tijerasDiv = document.getElementById('tijeras');

var juegos = +prompt("¡Hola! ¿Cuántas veces deseas jugar?");

function obtenerJugadaCompu() {
    const opciones = ["piedra", "papel", "tijeras"];
    const randomNum = Math.floor(Math.random() * 3);
    return opciones[randomNum];
}

function ganar(jugadaUsuario, jugadaCompu) {

    if (juegos > 0) {

        const circuloUsuario = document.getElementById(jugadaUsuario);
        puntosUsuario++;
        puntajeUsuario.innerHTML = puntosUsuario;
        puntajeComputador.innerHTML = puntosCompu;
        resultado.innerHTML = `${jugadaUsuario} le gana a ${jugadaCompu}. Ganaste! 🙌`;
        circuloUsuario.classList.add('circulo-verde');
        setTimeout(() => circuloUsuario.classList.remove('circulo-verde'), 500);
        (juegos = juegos - 1);
        alert("te quedan " + juegos + ", escoge bien tu opción");

    } else {
        alert("ya no tienes mas juegos disponibles")
    }
    // console.log("GANASTE");
}

function perder(jugadaUsuario, jugadaCompu) {

    if (juegos > 0) {

    const circuloUsuario = document.getElementById(jugadaUsuario);
    puntosCompu++;
    puntajeUsuario.innerHTML = puntosUsuario;
    puntajeComputador.innerHTML = puntosCompu;
    resultado.innerHTML = `${jugadaUsuario} pierde contra ${jugadaCompu}. Perdiste... 😭`;
    circuloUsuario.classList.add('circulo-rojo');
    setTimeout(() => circuloUsuario.classList.remove('circulo-rojo'), 500);
    (juegos = juegos - 1);
    alert("te quedan " + juegos + ", escoge bien tu opción");

} else {
    alert("ya no tienes mas juegos disponibles")
}
    // console.log("PERDISTE");
}

function empatar(jugadaUsuario, jugadaCompu) {

    if (juegos > 0) {

    const circuloUsuario = document.getElementById(jugadaUsuario);
    resultado.innerHTML = `${jugadaUsuario} es igual a ${jugadaCompu}. Empate 😑`;
    circuloUsuario.classList.add('circulo-gris');
    setTimeout(() => circuloUsuario.classList.remove('circulo-gris'), 500);
    (juegos = juegos - 1);
    alert("te quedan " + juegos + ", escoge bien tu opción");

} else {
    alert("ya no tienes mas juegos disponibles")
}
    // console.log("EMPATE");
}

// Función para la lógica del cachipún
function juego(jugadaUsuario) {
    const jugadaCompu = obtenerJugadaCompu();
    switch (jugadaUsuario + jugadaCompu) {
        case "piedratijeras":
        case "papelpiedra":
        case "tijeraspapel":
            ganar(jugadaUsuario, jugadaCompu);
            break;
        case "piedrapapel":
        case "papeltijeras":
        case "tijeraspiedra":
            perder(jugadaUsuario, jugadaCompu);
            break;
        case "piedrapiedra":
        case "papelpapel":
        case "tijerastijeras":
            empatar(jugadaUsuario, jugadaCompu);
            break;
    }
}

// Función principal que activa el juego con click
function main() {
    piedraDiv.addEventListener('click', () => juego("piedra"));

    papelDiv.addEventListener('click', () => juego("papel"));

    tijerasDiv.addEventListener('click', () => juego("tijeras"));

}
main();