import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe(
//     filter( val => val % 2 === 1 )
// ).subscribe( console.log );

range(20,30).pipe(
    filter( (val, i) => {
        console.log('index', i);
        return val % 2 === 1;
    })
)//.subscribe( console.log );

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];


from( personajes ).pipe(
    filter( p => p.tipo !== 'heroe' )
).subscribe( console.log );

// esto filtra por el pipe los keyboardEvent con el map decimos que solo queremos el event.code
// y con el filter decimos que solo dejamos pasar cuando el key sea el enter o sea cuando pulsemos la tecla enter

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event => event.code ), // recibe keyboardEvent, devuelve string
    filter( key => key === 'Enter' ),
);



keyup$.subscribe( console.log );


