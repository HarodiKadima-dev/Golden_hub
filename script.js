let input=document.getElementById('pesquisar');
let lista=document.getElementById('lista');


function mostrarJogadores(array){
    let html = '<div class="cards">';
    
    array.forEach(card=>{
        html += `
        <div class="cardsPequenos">
          <img src="${card.foto}" alt="${card.nome}" loading="lazy">
          <h1>${card.nome}</h1>
          <h2>${card.pais}</h2>
          <h2>${card.clube}</h2>
          <h3>${card.ano}</h3>
          <p>${card.descricao}</p>
        </div>
        `;
    });
    
    html += '</div>';
    lista.innerHTML = html;
}
mostrarJogadores(vencedoresBolaDeOuro);

input.addEventListener('input',()=>{
    let termo = input.value.toLowerCase().trim();
    let filtrados = vencedoresBolaDeOuro.filter(c=>c.nome.toLowerCase().includes(termo) || c.clube.toLowerCase().includes(termo) || c.pais.toLowerCase().includes(termo) || c.ano.toString().includes(termo));
    
    if(filtrados.length===0){
        lista.innerHTML='<p class="erro">Nenhum jogador encontrado</p>';
        return;
    }
    mostrarJogadores(filtrados);
});