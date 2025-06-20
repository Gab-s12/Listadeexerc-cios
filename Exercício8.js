document.getElementById('formPerfil').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const foto = document.getElementById('foto').value.trim();
  const hobbiesTexto = document.getElementById('hobbies').value.trim();
  if (!nome || !descricao || !foto || !hobbiesTexto) {
    alert('Por favor, preencha todos os campos!');
    return;
  }
  const hobbies = hobbiesTexto.split(',').map(hobby => hobby.trim());
  const perfilHTML = `
    <h2>${nome}</h2>
    <img src="${foto}" alt="Foto de perfil">
    <p>${descricao}</p>
    <h3>Hobbies:</h3>
    <ul>
      ${hobbies.map(h => `<li>${h}</li>`).join('')}
    </ul>
  `;
  const sectionPerfil = document.getElementById('perfil');
  sectionPerfil.innerHTML = perfilHTML;
  sectionPerfil.style.display = 'block';
});
