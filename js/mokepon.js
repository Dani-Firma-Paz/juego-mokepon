alert("Hola, mundo JS");

function () {
    let botonMascotaJugador = document.getElementById('boton-mascota');

botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    alert("SELECCIONASTE TU MASCOTA")
}



//para escuchar todo lo que pase en el navegador
window.addEventListener('load', iniciarJuego)
