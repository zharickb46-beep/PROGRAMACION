function ejercicio2() {
  let numero = prompt("Ingresa un número:");
  numero = Number(numero);

  let mensaje = "";

  if (numero % 2 === 0) {
    mensaje = "El número es par";
  } else {
    mensaje = "El número es impar";
  }

  document.getElementById("resultado").innerText = mensaje;
}