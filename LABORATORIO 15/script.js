function mostrarMensaje(seccion) {
  switch(seccion) {
    case 'intro':
      alert("Bienvenido a la pagina del Junior de Barranquilla.");
      break;
    case 'historia':
      alert("Explora la historia y triunfos.");
      break;
    case 'integrantes':
      alert("Conoce a los mejores jugadores del Junior de Barranquilla. ");
      break;
    case 'galeria':
      alert("Mira algunas fotos representativas de junior de barranquilla.");
      break;
    default:
      alert("Sección no encontrada.");
  }
}


document.querySelectorAll("nav a").forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();
    const id = enlace.getAttribute("href").substring(1);
    mostrarMensaje(id);
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
  });
});