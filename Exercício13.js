function converterParaF() {  
    const valor = parseFloat(document.getElementById('temperatura').value); 
    const resultado = document.getElementById('resultado');
  if (isNaN(valor)) {    
    resultado.textContent = "Digite um valor válido.";    
    return;  }
    const fahrenheit = (valor * 9/5) + 32;  
    resultado.textContent = `${valor}°C = ${fahrenheit.toFixed(2)}°F`;}
function converterParaC() { 
     const valor = parseFloat(document.getElementById('temperatura').value);  
     const resultado = document.getElementById('resultado');
     if (isNaN(valor)) {    
        resultado.textContent = "Digite um valor válido.";   
        return;  }
     const celsius = (valor - 32) * 5/9;  
     resultado.textContent = `${valor}°F = ${celsius.toFixed(2)}°C`;}