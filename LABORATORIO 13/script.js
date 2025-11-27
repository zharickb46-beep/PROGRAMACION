function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: División por cero";
  }
}
function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "suma":
      return sumar(num1, num2);
    case "resta":
      return restar(num1, num2);
    case "multiplicacion":
      return multiplicar(num1, num2);
    case "division":
      return dividir(num1, num2);
    default:
      return "Operación no válida";
  }
}
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

let resultado = calculadora(numero1, numero2, operacion);
console.log("El resultado es: " + resultado);