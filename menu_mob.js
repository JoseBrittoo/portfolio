

// efeito no menu responsivo
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu') // classe dinamica para o menu abrir
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu') // classe dinamica para fechar menu
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu') // classe dinamica fechar menu no overlay
})