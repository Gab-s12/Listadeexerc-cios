function verificarParOuImpar() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
  
    if (numero === "") {
      resultado.textContent = "Por favor, digite um número.";
      return;
    }
  
    if (parseInt(numero) % 2 === 0) {
      resultado.textContent = `O número ${numero} é par.`;
    } else {
      resultado.textContent = `O número ${numero} é ímpar.`;
    }
  }