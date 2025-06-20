const texto = document.getElementById("textoHover");
const textoOriginal = texto.textContent;
texto.addEventListener("mouseover", function () {
  texto.textContent = "Você passou o mouse!!";
});
texto.addEventListener("mouseout", function () {
  texto.textContent = textoOriginal;
});
