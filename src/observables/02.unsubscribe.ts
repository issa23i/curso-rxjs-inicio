import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
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
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("intervalo destruido");
  };
});

const subcription1 = intervalo$.subscribe(observer);
const subcription2 = intervalo$.subscribe(observer);
const subcription3 = intervalo$.subscribe(observer);

subcription1.add(subcription2);
subcription1.add(subcription3);

setTimeout(() => {
  subcription1.unsubscribe();
  // subcription2.unsubscribe();
  // subcription3.unsubscribe();
  console.log("completado timeout");
}, 3000);
