import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next: ", val),
  //   error: (err) => console.error(err),
  complete: () => console.log("complete"),
};

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
// const interval$ = interval(10000);
// const timer$ = timer(6000);
// const timer$ = timer(2011, 6000);
const timer$ = timer(hoyEn5);

console.log("inicio...");

// interval$.subscribe(observer);

timer$.subscribe(observer);

console.log("fin");
