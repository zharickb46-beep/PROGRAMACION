function bienvenida() {
  alert("¡Bienvenido al paraiso de la salsa!");
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  if (name === '' || email === '') {
    alert('Por favor, completa todos los campos.');
    event.preventDefault();
  } else {
    alert('¡Formulario enviado correctamente!');
  }
});