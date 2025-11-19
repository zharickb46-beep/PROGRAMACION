let esMayorDeEdad = true;
let tieneLicencia = false;

let puedeConducir = esMayorDeEdad && tieneLicencia;
let puedeConducir1 = esMayorDeEdad || tieneLicencia;

console.log("¿puede conducir?", puedeConducir);
console.log("¿puede conducir1?", puedeConducir1);