function calcular(operador) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const resultado = document.getElementById("resultado");
  if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = "Digite dois números válidos.";
    return;
  }
  let res;
  switch (operador) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      if (n2 === 0) {
        resultado.textContent = "Não é possível dividir por zero.";
        return;
      }
      res = n1 / n2;
      break;
    default:
      resultado.textContent = "Operação inválida.";
      return;
  }
  resultado.textContent = `Resultado: ${res}`;
}
