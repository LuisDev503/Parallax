let contenedor = document.querySelector('.img')
let img = document.querySelector('.subImg');
contenedor.addEventListener('mousemove',(e) => {
    img.style.top = e.clientY/20+"px";
    img.style.left = e.clientX/20+"px";
})
contenedor.addEventListener('mouseleave',() => {
    img.style.top = 0+"px";
    img.style.left = 0+"px";
})