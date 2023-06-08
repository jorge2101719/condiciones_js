// Parte 1

let img = document.querySelector('#imagen_automovil');
let comentario = document.querySelector('#comentario');
let contador = 0;

img.addEventListener('click', () => {
    if (contador % 2 == 0) {
        img.style.border = '2px solid red';
        comentario.innerHTML = 'Con borde';
        contador += 1;
    } else {
        img.style.border = '0';
        comentario.innerHTML = 'Sin borde';
        contador += 1;
    }
});