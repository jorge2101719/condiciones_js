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


// Parte 2

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let aviso = document.querySelector('#aviso');
let verificar = document.querySelector('#verificar');
let suma = 0;

verificar.addEventListener('click', () => {
    if (input1.value > 0 && input2.value > 0 && input3.value > 0) {
        suma = Number(input1.value) + Number(input2.value) + Number(input3.value);
        if (suma > 10) {
            aviso.innerHTML = 'Tienes demasiados Stickers ' + '(' + suma + ')';
            input1.value = '';
            input2.value = '';
            input3.value = '';
            // suma = 0;
        } else {
            aviso.innerHTML = `Tienes ${suma} stickers`;
        }
    } else {
        console.log(input1);
        aviso.innerHTML = 'uno (o más) número(s) es(son) incorrecto(s)';
        input1.value = '';
        input2.value = '';
        input3.value = '';
        suma = 0;
        console.log(input1)
    }
});



// Parte 3