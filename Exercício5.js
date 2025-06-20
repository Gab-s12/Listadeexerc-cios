function calcularMedia() {
  const n1 = parseFloat(document.getElementById('nota1').value);
  const n2 = parseFloat(document.getElementById('nota2').value);
  const n3 = parseFloat(document.getElementById('nota3').value);
  const resultado = document.getElementById('resultado');
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    resultado.textContent = "Por favor, preencha todas as notas corretamente.";
    return;
  }
  const media = (n1 + n2 + n3) / 3;
  if (media >= 7) {
    resultado.textContent = `Média: ${media.toFixed(2)} — Aprovado! `;
  } else {
    resultado.textContent = `Média: ${media.toFixed(2)} — Reprovado. `;
  }
}
