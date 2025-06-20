let valor = 0;

function aumentar() {
  valor++;
  atualizarDisplay();
}

function diminuir() {
  valor--;
  atualizarDisplay();
}

function atualizarDisplay() {
  document.getElementById('numero').textContent = valor;
}
