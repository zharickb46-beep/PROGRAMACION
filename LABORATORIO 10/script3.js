let esMayorDeEdad = true;
let tieneLicencia = false;

let puedeConducir = esMayorDeEdad && tieneLicencia;
console.log("¿Puede conducir?:", puedeConducir);

let puedeConducirAlternativo = esMayorDeEdad || tieneLicencia;
console.log("¿Puede conducir (alternativo)?:", puedeConducirAlternativo);

let mensaje1 = "Hola " + nombre + ", bienvenido a la sesión 10.";
console.log(mensaje1);

let mensaje2 = `Hola ${nombre}, tienes ${edad} años y tu estado de estudiante es: ${esEstudiante}`;
console.log(mensaje2);