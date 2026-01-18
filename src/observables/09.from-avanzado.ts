import { from, of } from "rxjs";
/**
 * of = toma argumentos y gnera una secuenda de argumentos
 * from = array, promise, iterable, observable
 */

const observer = {
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
};

// const source$ = from([1, 2, 3, 4, 5, 6]);
// const source$ = of(...[1, 2, 3, 4, 5, 6]);
// const source$ = from("Isa");

// const source$ = from(fetch("https://api.github.com/users/issa23i/followers"));

// source$.subscribe(async (resp) => {
//   //   console.log(resp);

//   const dataResp = await resp.json();
//   console.log(dataResp);
// });

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
};

const iterable = miGenerador();

// for (let id of iterable) {
//   console.log(id);
// }

from(iterable).subscribe(observer);
