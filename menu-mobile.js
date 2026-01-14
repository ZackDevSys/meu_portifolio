const btnAbrirMenu = document.getElementById('btn-abrir-menu');
const btnFecharMenu = document.getElementById('btn-fechar');
const menu = document.getElementById('menu-mobile');
const linksMenu = menu.querySelectorAll('a');

// Funções
function abrirMenu() {
    menu.classList.add('abrir-menu');
    document.body.style.overflow = 'hidden';
    btnAbrirMenu.setAttribute('aria-expanded', 'true');
}

function fecharMenu() {
    menu.classList.remove('abrir-menu');
    document.body.style.overflow = '';
    btnAbrirMenu.setAttribute('aria-expanded', 'false');
}

// Eventos principais
btnAbrirMenu?.addEventListener('click', abrirMenu);
btnFecharMenu?.addEventListener('click', fecharMenu);

// Fecha ao clicar em qualquer link
linksMenu.forEach(link => {
    link.addEventListener('click', fecharMenu);
});

// Fecha com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('abrir-menu')) {
        fecharMenu();
    }
});