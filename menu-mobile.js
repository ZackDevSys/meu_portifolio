let btnAbrirMenu = document.getElementById('btn-abrir-menu')
let btnFecharMenu = document.getElementById('btn-fechar')
let menu = document.getElementById('menu-mobile')

// ABRIR MENU
btnAbrirMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

// FECHAR MENU
btnFecharMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
