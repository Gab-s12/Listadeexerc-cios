let segundos = 0;
let minutos = 0;
let intervalo = null;

function atualizarTempo() {
  let tempoFormatado = 
    (minutos < 10 ? "0" + minutos : minutos) + ":" +
    (segundos < 10 ? "0" + segundos : segundos);
  document.getElementById("tempo").textContent = tempoFormatado;
}

function iniciar() {
  // Só inicia se não tiver intervalo rodando
  if (intervalo === null) {
    intervalo = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
      atualizarTempo();
    }, 1000);
  }
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null; 
}
function zerar() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  minutos = 0;
  atualizarTempo();
}
