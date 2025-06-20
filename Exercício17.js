function verificarRespostas() {
  let acertos = 0;
  const respostas = {
    q1: "b",
    q2: "a",
    q3: "a"
  };
  for (let questao in respostas) {
    let selecionada = document.querySelector(`input[name="${questao}"]:checked`);
    if (selecionada && selecionada.value === respostas[questao]) {
      acertos++;
    }
  }
  document.getElementById("resultado").textContent =
    `Você acertou ${acertos} de 3 questões.`;
}
