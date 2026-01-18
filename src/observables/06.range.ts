import {
  animationFrameScheduler,
  asyncScheduler,
  interval,
  observeOn,
  of,
  range,
} from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);

// console.log("inicio");
// src$.subscribe(console.log);
// console.log("fin");

const src1$ = range(-3, 5).pipe(observeOn(asyncScheduler, 8000));

console.log("inicio");
src1$.subscribe(console.log);
console.log("fin");

const someDiv = document.createElement("div");
someDiv.style.cssText = "width: 200px;background: #09c";
document.body.appendChild(someDiv);
const intervals = interval(10); // Intervals are scheduled
// with async scheduler by default...
intervals
  .pipe(
    observeOn(animationFrameScheduler) // ...but we will observe on animationFrame
  ) // scheduler to ensure smooth animation.
  .subscribe((val) => {
    someDiv.style.height = val + "px";
  });
