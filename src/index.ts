import { Observable } from 'rxjs';

// creacion poco comun de observables
// const obs$ = Observable.create();

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');

    subs.complete();
});

obs$.subscribe((resp:string) => {
    console.log(resp);
});







