function verificarResposta() {
  const opcoes = document.getElementsByName('resposta');
  const resultado = document.getElementById('resultado');
  let respostaSelecionada = "";
  for (let opcao of opcoes) {
    if (opcao.checked) {
      respostaSelecionada = opcao.value;
      break;
    }
  }
  if (respostaSelecionada === "") {
    resultado.textContent = "Por favor, selecione uma resposta.";
  } else if (respostaSelecionada === "c") {
    resultado.textContent = "Correto! Brasília é a capital do Brasil.";
  } else {
    resultado.textContent = "Incorreto. A resposta certa é Brasília.";
  }
}
