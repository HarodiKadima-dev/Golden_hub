// Cria o header e o menu direto no JS para não poluir o HTML
const menuContainer = document.getElementById('menu-container');

// HTML do header e menu
menuContainer.innerHTML = `
  <header class="header">
    <button class="menu-btn" id="menuBtn">☰</button>
  </header>

  <nav class="menu" id="menu">
    <a href="index.html">Início</a>
    <a href="bola.html" ">Vencedores da Bola de Ouro</a>
    <a href="chuteira.html">Vencedores da Chuteira de Ouro</a>
  </nav>
`;

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

// Abre e fecha o menu ao clicar no botão
menuBtn.addEventListener('click', function() {
  menu.classList.toggle('active');
});

// Fecha o menu ao clicar fora
document.addEventListener('click', function(e) {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove('active');
  }
});



