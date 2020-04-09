import { of, from, Observer } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

// el * indica que es una funcion generadora
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for( let id of miIterable ){
//     console.log(id);
// }
// el from hace lo mismo que el bucle for de arriba
from( miIterable ).subscribe( observer );



// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('Fernando');

const source$ = from(  fetch('https://api.github.com/users/israelbejarano') );

// source$.subscribe( async(resp) => {

//     console.log( resp );

//     const dataResp = await resp.json();
//     console.log(dataResp);

// });


// source$.subscribe( observer );