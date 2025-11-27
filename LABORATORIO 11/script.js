function ejercicio1() {
  let calificacion = prompt("Ingresa tu calificación (0-100):");
  calificacion = Number(calificacion);

  let mensaje = "";

  if (calificacion >= 90) {
    mensaje = "Aprobado con honores";
  } else if (calificacion >= 70) {
    mensaje = "Aprobado";
  } else {
    mensaje = "Reprobado";
  }

  document.getElementById("resultado").innerText = mensaje;
}


