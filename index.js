let btn1 = document.querySelector('.punto2')
let btn2 = document.querySelector('.punto1')

let img1 = document.querySelector('#imagen-uno')
let img2 = document.querySelector('#imagen-dos')


btn1.addEventListener('click', ()=> {
    btn2.style.backgroundColor="#fff"
    btn1.style.backgroundColor="#4E93DE"
    img1.classList.add('activar')
    img2.classList.add('desactivar')
})

btn2.addEventListener('click', ()=> {
    btn1.style.backgroundColor="#fff"
    btn2.style.backgroundColor="#4E93DE"
    img1.classList.remove('activar')
    img2.classList.remove('desactivar')
})