let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

let resultado = calculadora(numero1, numero2, operacion);
console.log("El resultado es: " + resultado);
