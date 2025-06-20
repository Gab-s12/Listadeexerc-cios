// b
const botao = document.getElementById("btnCor");

// c
botao.addEventListener("click", function () {
  // d 
  const cores = ["red", "green", "blue", "orange", "purple", "pink", "yellow"];

  // e
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  botao.style.backgroundColor = corAleatoria;
});
