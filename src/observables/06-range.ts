import { of, range, asyncScheduler } from 'rxjs';


// const src$ = of(1,2,3,4,5);
const src$ = range(1,5, asyncScheduler); // asyncScheduler hacer el range asincrono, vale para el of también


console.log('inicio');
src$.subscribe( console.log );
console.log('fin');


