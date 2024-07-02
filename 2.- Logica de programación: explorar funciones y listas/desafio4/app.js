let listaGenerica = [];

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

function mostrarLenguajes() {
  console.log(lenguagesDeProgramacion);
}

function mostrarLenguajesInverso() {
  console.log(lenguagesDeProgramacion.slice().reverse());
}

function calcularPromedio(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

function mostrarMaxMin(listaNumeros) {
  let max = Math.max(...listaNumeros);
  let min = Math.min(...listaNumeros);
  console.log("Número más grande:", max);
  console.log("Número más pequeño:", min);
}

function sumarElementos(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

function encontrarPosicion(lista, elemento) {
  return lista.indexOf(elemento);
}

function sumarListas(lista1, lista2) {
  let listaSuma = [];
  for (let i = 0; i < lista1.length; i++) {
    listaSuma.push(lista1[i] + lista2[i]);
  }
  return listaSuma;
}

function cuadradoLista(listaNumeros) {
  return listaNumeros.map((num) => num * num);
}

mostrarLenguajes();
mostrarLenguajesInverso();
console.log(calcularPromedio([1, 2, 3, 4, 5]));
mostrarMaxMin([1, 2, 3, 4, 5]);
console.log(sumarElementos([1, 2, 3, 4, 5]));
console.log(encontrarPosicion(lenguagesDeProgramacion, "Python"));
console.log(sumarListas([1, 2, 3], [4, 5, 6]));
console.log(cuadradoLista([1, 2, 3, 4, 5]));
