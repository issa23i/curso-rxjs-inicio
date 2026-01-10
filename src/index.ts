import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
  next: (value) => console.log("siguiente [next]: ", value),
  error: (err) => console.warn("error [observer]: ", err),
  complete: () => console.info("completado [observer] "),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // crear un contador
  let uno = 1;
  const interval = setInterval(() => {
    uno++;
    subscriber.next(uno);
    console.log(uno);
  }, 3500);

  return () => {
    clearInterval(interval);
    console.log("intervalo destruido");
  };
});

const subcription1 = intervalo$.subscribe();
const subcription2 = intervalo$.subscribe();
const subcription3 = intervalo$.subscribe();

setTimeout(() => {
  subcription1.unsubscribe();
  subcription2.unsubscribe();
  subcription3.unsubscribe();
  console.log("completado timeout");
}, 10500);
