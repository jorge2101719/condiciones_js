// Parte 1

let img = document.querySelector('#imagen_automovil');
let comentario = document.querySelector('#comentario');
let contador = 0;

img.addEventListener('click', () => {
    if (contador % 2 == 0) {
        img.style.border = '2px solid red';
        comentario.innerHTML = 'Con borde';
        comentario.style.backgroundColor = '#02f';
        contador += 1;
    } else {
        img.style.border = '0';
        comentario.innerHTML = 'Sin borde';
        comentario.style.backgroundColor = 'red';
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
            aviso.style.padding = '1%';
            aviso.style.backgroundColor = 'red';
            input1.value = '';
            input2.value = '';
            input3.value = '';
            // suma = 0;
        } else {
            aviso.innerHTML = `Tienes ${suma} stickers`;
            aviso.style.padding = '1%';
            aviso.style.backgroundColor = '#02f';
        }
    } else {
        console.log(input1);
        aviso.innerHTML = 'uno (o más) número(s) es(son) incorrecto(s)';
        aviso.style.padding = '1%';
        aviso.style.backgroundColor = 'red';
        input1.value = '';
        input2.value = '';
        input3.value = '';
        suma = 0;
        console.log(input1)
    }
});



// Parte 3

let clave1 = document.querySelector('#clave1');
let clave2 = document.querySelector('#clave2');
let clave3 = document.querySelector('#clave3');
let ingresar = document.querySelector('#ingresar');
let mensaje = document.querySelector('#mensaje');

ingresar.addEventListener('click', () => {
    if (clave1.value == 9 && clave2.value == 1 && clave3.value == 1) {
        mensaje.innerHTML = 'Password 1 correcta. Bienvenido';
        mensaje.style.padding = '1%';
        mensaje.style.backgroundColor = '#02f';
    } else if (clave1.value == 7 && clave2.value == 1 && clave3.value == 4) {
        mensaje.innerHTML = 'Password 2 correcta. Bienvenido';
        mensaje.style.padding = '1%';
        mensaje.style.backgroundColor = '#02f';
    } else {
        mensaje.innerHTML = 'Password incorrecta. Inténtelo nuevamente';
        mensaje.style.backgroundColor = 'red';
        mensaje.style.padding = '2%';
        mensaje.style.fontSize = '1.2rem';
    }
})









