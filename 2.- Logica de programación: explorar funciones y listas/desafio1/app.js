let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

function clickBtnConsole() {
  console.log("El botón fue clickeado");
}

function clickBtnPrompt() {
  let ciudad = prompt("Dime el nombre de una ciudad de Brasil");
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function clickBtnAlert() {
  alert("Yo amo JS ❤️");
}

function clickBtnSuma() {
  let num1 = parseInt(prompt("Ingresa un número"));
  let num2 = parseInt(prompt("Ingresa un número"));

  let resultado = num1 + num2;

  alert(`La suma de los números es ${resultado}`);
}
