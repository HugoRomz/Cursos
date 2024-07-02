function indiceMasaCorporal(altura, peso) {
  let imc = peso / Math.pow(altura, 2);

  return imc;
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function convertirADolares(num) {
  const dolar = 18;

  let resultado = num * dolar;

  return resultado;
}

function areaPerimetroRectangular(altura, base) {
  let area = altura * base;
  let perimetro = 2 * (altura + base);

  return [area, perimetro];
}

function areaPerimetroCircular(radio) {
  let area = Math.PI * Math.pow(radio, 2);
  let perimetro = 2 * Math.PI * radio;

  return [area, perimetro];
}

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  return;
}

console.log(indiceMasaCorporal(1.75, 70));
console.log(factorial(5));
console.log(convertirADolares(100));
console.log(areaPerimetroRectangular(2, 3));
console.log(areaPerimetroCircular(3));
tablaMultiplicar(5);
