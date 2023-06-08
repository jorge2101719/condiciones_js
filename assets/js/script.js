// Parte 1

let img = document.querySelector('#imagen_automovil');
let contador = 0;

img.addEventListener('click', () => {
    if (contador % 2 == 0) {
        img.style.border = '2px solid red';
        contador += 1;
    } else {
        img.style.border = '0';
        contador += 1;
    }
});