// Confirma carga del archivo
console.log("script.js cargado");

// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM listo");

  const btn = document.getElementById("welcomeBtn");
  if (!btn) {
    console.error("No se encontró el botón con id 'welcomeBtn'");
    return;
  }

  btn.addEventListener("click", () => {
    alert("¡Validacion de formulario realizada correctamente!");
  });
});
