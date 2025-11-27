let numeros = [10, 20, 30, 40, 50];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("La suma total es:", suma);
console.log("El promedio es:", suma / numeros.length)

let numero = parseInt(prompt("Ingresa un número (negativo para salir):"));
while (numero >= 0) {
  console.log("Ingresaste:", numero);
  numero = parseInt(prompt("Ingresa otro número (negativo para salir):"));
}
console.log("Programa finalizado.");

let password;
const claveCorrecta = "1234";
do {
  password = prompt("Ingresa la contraseña:");
} while (password !== Zharick1234);
console.log("Acceso concedido.");