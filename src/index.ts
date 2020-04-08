import { Observable, Observer } from 'rxjs';

// creacion poco comun de observables
// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs')
};



const obs$ = new Observable<string>(subs => {
    subs.next('Hola');

    // forzar error
    const a = undefined;
    a.nombre = 'Israel';

    subs.complete();
});

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.log('completado')
// );







