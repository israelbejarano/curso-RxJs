import { interval, timer, Observer } from 'rxjs'; // todo lo que se importe de rxjs
                                        // significa funcion que crea observables o tipados especiales

const observer: Observer<any> = {
    next: val => console.log('next:', val),
    error: error => console.warn('error: ', error),
    complete: () => console.log('complete'),
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );


const interval$ = interval(1000);

// const timer$    = timer(2000);
// const timer$    = timer(2000, 1000 );
const timer$    = timer( hoyEn5 );


console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer )
console.log('Fin');









