function saludo() {
  console.log("Hola, mundo!");
}

function saludoParams(nombre) {
  console.log(`Hola, ${nombre}!`);
}

function numDoble(numero) {
  return numero * 2;
}

function promedio3numeros(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

function numMayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function multiplicarNum(numero) {
  return numero * numero;
}

saludo();
saludoParams("Juan");
console.log(numDoble(5));
console.log(promedio3numeros(1, 2, 3));
console.log(numMayor(5, 10));
console.log(multiplicarNum(5));
