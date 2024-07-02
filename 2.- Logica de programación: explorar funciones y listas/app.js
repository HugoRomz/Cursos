let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSeleccionados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let inputNumUsuario = parseInt(
    document.getElementById("inputNumUsuario").value
  );

  if (inputNumUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Felicidades! Adivinaste el número secreto en ${intentos} ${
        intentos === 1 ? "vez" : "veces"
      }`
    );
    document.querySelector("#reiniciar").removeAttribute("disabled");
  } else if (inputNumUsuario > numeroSecreto) {
    asignarTextoElemento("p", "El número secreto es menor");
  } else {
    asignarTextoElemento("p", "El número secreto es mayor");
  }
  limpiarCaja();
  intentos++;
  return;
}

function generarNumeroSecreto() {
  let numGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if (listaNumeroSeleccionados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya fueron sorteados todos los números posibles");
  } else {
    if (listaNumeroSeleccionados.includes(numGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumeroSeleccionados.push(numGenerado);
      return numGenerado;
    }
  }
}

function limpiarCaja() {
  document.querySelector("#inputNumUsuario").value = "";
  return;
}

function setup() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto);
  intentos = 1;
}

function reiniciarJuego() {
  console.log(listaNumeroSeleccionados);
  limpiarCaja();
  setup();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");

  return;
}

setup();
