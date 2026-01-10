import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
  next: (value) => console.log("siguiente [next]: ", value),
  error: (err) => console.warn("error [observer]: ", err),
  complete: () => console.info("completado [observer] "),
};

const obsservable$ = new Observable<string>((subscriber) => {
  subscriber.next("Hola");
  subscriber.next("Mundo");

  // forzar un error
  const a = undefined;
  a.nombre = "Isa";

  subscriber.complete();

  subscriber.next("Adiós");
});

obsservable$.subscribe(observer);

// obsservable$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("error: ", error),
//   () => console.info("complete")
// );
