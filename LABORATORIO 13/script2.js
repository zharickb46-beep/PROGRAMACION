function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "suma":
      return sumar(num1, num2);
    case "resta":
      return restar(num1, num2);
    case "multiplicacion":
      return multiplicar(num1, num2);
    case "division":
      return dividir(num1, num2);
    default:
      return "Operación no válida";
  }
}
