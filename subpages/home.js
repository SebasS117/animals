let left = document.querySelector('.btn-left').onclick=mostrar;
// document.querySelector('.animales').style.display="none";

let right = document.querySelector('.btn-right').onclick=ocultar;


function ocultar() {
    document.querySelector('.animales').style.display="none";
    document.querySelector('.btn-right').style.backgroundColor="#6AA5E3";
    document.querySelector('.btn-left').style.backgroundColor="#F1F9FD";
    document.querySelector('.animales2').style.display="grid";
    document.querySelector('.btn-left').style.color="#2C4674";
}

function mostrar() {
    document.querySelector('.btn-right').style.backgroundColor="#F1F9FD";

    document.querySelector('.btn-left').style.backgroundColor="#6AA5E3";
    document.querySelector('.btn-left').style.color="#fff";
    document.querySelector('.animales2').style.display="none";
    document.querySelector('.animales').style.display="grid";
}



let btnuno = document.querySelector('#alex')

let atras = document.querySelector('#atras')
let atrasdos = document.querySelector('#atras2')

let btndos = document.querySelector('#karsten')

btnuno.addEventListener('click', ()=> {
    document.querySelector('.tarjeta').style.display="block"
})

atras.addEventListener('click', ()=> {
    document.querySelector('.tarjeta').style.display="none"
})

btndos.addEventListener('click', ()=> {
    document.querySelector('.tarjeta2').style.display="block"
})

atrasdos.addEventListener('click', ()=> {
    document.querySelector('.tarjeta2').style.display="none"
})




