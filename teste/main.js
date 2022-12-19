
  const alunos = document.querySelectorAll(".info-telefone");

  for (let indice = 0; indice < alunos.length; indice++) {
    const novoTelefone = alunos[indice].textContent.replace(/-/g,'')
    alunos[indice].textContent = novoTelefone;
}