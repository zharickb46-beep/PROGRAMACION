function ejercicio3() {
  let monto = prompt("Ingresa el monto total de tu compra:");
  monto = Number(monto);

  let mensaje = "";

  if (monto > 100) {
    let descuento = monto * 0.10;
    let total = monto - descuento;
    mensaje = "Se aplicó un 10% de descuento. Total a pagar: $" + total;
  } else {
    mensaje = "No aplica descuento. Total a pagar: $" + monto;
  }

  document.getElementById("resultado").innerText = mensaje;
}
