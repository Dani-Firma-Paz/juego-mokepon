const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');

const botonReiniciar = document.getElementById('boton-reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');

const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokecats = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokecats
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let mascotaJugador
let ataquesMokecats
let ataquesMokecatsEnemigo
let botonFuego 
let botonAgua 
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Mokecats {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataque = [] 
    }
}

let hipodoge = new Mokecats('Hipodoge', './assets/gato4.png');
let capipepo = new Mokecats('Capipepo', './assets/gato2.png');
let ratigueya = new Mokecats('Ratigueya', './assets/gato5.png');

hipodoge.ataque.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'}, 
)

capipepo.ataque.push(
    { nombre: '🌱', id: 'boton-tierra'}, 
    { nombre: '🌱', id: 'boton-tierra'}, 
    { nombre: '🌱', id: 'boton-tierra'}, 
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataque.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'}, 
)

mokecats.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    
    mokecats.forEach((mokecats) => {
        opcionDeMokecats = `
        <input type="radio" name="mascota" id=${mokecats.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokecats.nombre}>
            <p>${mokecats.nombre}</p>
            <img src=${mokecats.foto} alt=${mokecats.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokecats

    inputHipodoge = document.getElementById('Hipodoge');
    inputCapipepo = document.getElementById('Capipepo');
    inputRatigueya = document.getElementById('Ratigueya');
    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego) 
}

// sectionReiniciar.style.display = 'none'

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'


    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Debes seleccionar una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let  i = 0; index < mokecats.length; i++) {
        if (mascotaJugador === mokecats[i.nombre]) {
            ataques = mokecats[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokecats = `
        <button id=${ataque.id} class="boton-de-ataque buttonsAttack">${ataque.nombre} 💧</button>
        `
        contenedorAtaques.innerHTML += ataquesMokecats
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.buttonsAttack')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#E384FF'
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#E384FF'
            } else {
                (e.target.textContent === '🌱')
                    ataqueJugador.push('TIERRA')
                    console.log(ataqueJugador)
                    boton.style.background = '#E384FF'
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo() {
    
    let mascotaAleatoria = aleatorio(0, mokecats.length - 1)


    spanMascotaEnemigo.innerHTML = mokecats[mascotaAleatoria].nombre
    ataquesMokecatsEnemigo = mokecats[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokecatsEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataquesMokecatsEnemigo ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio ==4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}

function combate() {
    
    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo [index] === 'TIERRA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo [index] === 'FUEGO') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo [index] === 'AGUA') {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }
        
    }

    revisarVidas()
}


function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('¡Esto fue un empate!')
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('¡FELICITACIONES, ganaste!')
    } else {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {

    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo);   
}


function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = 'block'
}


function reiniciarJuego() {
    location.reload()
}
//Location (ubicación en la que estamos en un sitio web. Reload es un método de Location
//Y sirve para recargar la página automáticamente.)

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//para escuchar todo lo que pase en el navegador
 window.addEventListener('load', iniciarJuego)
