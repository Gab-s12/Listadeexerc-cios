function mostrarTabuada() {
  const numeroInput = document.getElementById('numero').value;
  const resultado = document.getElementById('resultado'); 
  const numero = parseInt(numeroInput);
  if (isNaN(numero)) {
    alert('Por favor, digite um número inteiro válido.');
    resultado.innerHTML = '';
    return;
  }
  let textoResultado = `<h3>Tabuada do ${numero}</h3>`;
  textoResultado += '<ul>';  
  for (let i = 1; i <= 10; i++) {
    textoResultado += `<li>${numero} x ${i} = ${numero * i}</li>`;
  }
  textoResultado += '</ul>';
  resultado.innerHTML = textoResultado;
}

  