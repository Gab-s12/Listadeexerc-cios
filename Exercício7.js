document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && email && assunto && mensagem) {
    document.getElementById("resultado").textContent = "Mensagem enviada com sucesso!";
  } else {
    document.getElementById("resultado").textContent = "Por favor, preencha todos os campos.";
  }
});