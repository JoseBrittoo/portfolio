

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

// cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#8257e6", 
    "#925fe9", 
    "#a068ed", 
    "#ae70f0", 
    "#bb79f4", 
    "#c783f7", 
    "#d38cfb", 
    "#de96fff"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();