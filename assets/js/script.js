// Parte 1

let img = document.querySelector('#imagen_automovil');
let comentario = document.querySelector('#comentario');
let contador = 0;

// llamada a función cambiarBorde con evento click
img.addEventListener('click', cambiarBorde);

// definición de la función que (des)marca el borde
// se hace uso de función módulo 2 como condición de control
// si bien no se pedía ningún texto junto a ella decidí hacerlo para mayor claridad;
// se incluyen instrucciones para cambiar el color de fondo del texto junto a la imagen
function cambiarBorde () {
    if (contador % 2 == 0) {
        img.style.border = '2px solid red';
        img.style.width = '60.7%';
        comentario.style.backgroundColor = '#02f';
        contador += 1;
        comentario.innerHTML = 'Con borde (' + contador + ' clicks)';
    } else {
        img.style.border = '0';
        img.style.width = '62%';
        comentario.style.backgroundColor = 'red';
        contador += 1;
        comentario.innerHTML = 'Sin borde (' + contador + ' clicks)';
    }
}


// Parte 2

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let aviso = document.querySelector('#aviso');
let verificar = document.querySelector('#verificar');
let suma = 0;

// llamada a función contarStickers con evento click
verificar.addEventListener('click', contarStickers);

// definición de la función que cuenta los stickers
// se usan fondos azules cuando todo va bien y rojo en caso contrario
function contarStickers () {
    if (input1.value > 0 && input2.value > 0 && input3.value > 0) {
        suma = Number(input1.value) + Number(input2.value) + Number(input3.value);
        if (suma > 10) {
            aviso.innerHTML = 'Tienes demasiados adhesivos ' + '(' + suma + ')';
            aviso.style.padding = '1%';
            aviso.style.backgroundColor = 'red';
            input1.value = '';
            input2.value = '';
            input3.value = '';
            // suma = 0;
        } else {
            aviso.innerHTML = `Tienes ${suma} adhesivos`;
            aviso.style.padding = '1%';
            aviso.style.backgroundColor = '#02f';
        }
    } else {
        aviso.innerHTML = 'uno (o más) número(s) es(son) incorrecto(s)';
        aviso.style.padding = '1%';
        aviso.style.backgroundColor = 'red';
        input1.value = '';
        input2.value = '';
        input3.value = '';
        suma = 0;
    }
}



// Parte 3

let clave1 = document.querySelector('#clave1');
let clave2 = document.querySelector('#clave2');
let clave3 = document.querySelector('#clave3');
let ingresar = document.querySelector('#ingresar');
let mensaje = document.querySelector('#mensaje');


// uso de función flecha, usando instrucciones de MDN Web Docs y otras fuentes
// la función flecha tiene las instrucciones que permiten verificar las claves
// entregando los respectivos mensajes
ingresar.addEventListener('click', () => {
    if (clave1.value == 9 && clave2.value == 1 && clave3.value == 1) {
        mensaje.innerHTML = 'Clave 1 correcta. Bienvenido';
        mensaje.style.padding = '1%';
        mensaje.style.backgroundColor = '#02f';
    } else if (clave1.value == 7 && clave2.value == 1 && clave3.value == 4) {
        mensaje.innerHTML = 'Clave 2 correcta. Bienvenido';
        mensaje.style.padding = '1%';
        mensaje.style.backgroundColor = '#02f';
    } else {
        mensaje.innerHTML = 'Clave incorrecta. Inténtelo nuevamente';
        mensaje.style.backgroundColor = 'red';
        mensaje.style.padding = '2%';
        mensaje.style.fontSize = '1.2rem';
    }
})