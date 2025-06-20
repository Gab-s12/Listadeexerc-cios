const numeroSorteado = Math.floor(Math.random() * 10) + 1;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById('palpite').value);
  const msg = document.getElementById('mensagem');
  if (palpite === numeroSorteado) {
    msg.textContent = "Parabéns! Você acertou!";
  } else {
    msg.textContent = "Errado! O número era " + numeroSorteado;
  }
}
function reiniciarPagina() {
  location.reload();
}
