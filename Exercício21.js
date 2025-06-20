// c.
const campo = document.getElementById("inputTecla");
// d.
campo.addEventListener("keydown", function(e) {
  document.getElementById("teclaPressionada").textContent = e.key;
});
