function mostrarImagen(event) {
  let archivo = event.target.files[0];
  if (archivo) {
    if (!archivo.type.match('image/jpeg') && !archivo.type.match('image/png')) {
      alert("Solo se permiten imágenes JPG o PNG.");
      event.target.value = "";
      return;
    }
    let imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(archivo);
  }
}

document.getElementById("formRegistro").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let password = document.getElementById("password").value.trim();
  let imagen = document.getElementById("imagen").files[0];

  if (nombre === "" || correo === "" || password === "" || !imagen) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  alert("Registro exitoso 🎉 Bienvenido/a, " + nombre + "!");
  
});