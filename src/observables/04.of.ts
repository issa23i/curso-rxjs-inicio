import { of } from "rxjs";

// const obs$ = of<number>(1, 2, 3, 4, 5, 6);
const obs$1 = of<number>(3);
const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
);

obs$.subscribe(
  (next) => console.log("next ", next),
  null,
  () => console.log("fin")
);

obs$1.subscribe({
  next: (resp) => {
    console.log(resp);
  },
});
