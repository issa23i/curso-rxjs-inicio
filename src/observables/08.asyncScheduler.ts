// setTimeout(() => {
//   console.log("settimeout");
// }, 3000);

import { asyncScheduler } from "rxjs";

// setInterval(() => {
//   console.log("setinterval");
// }, 5000);

const saludar = () => console.log("Hola, mundo");
const saludar2 = ({ nombre, apellido }) =>
  console.log("Hola, ", nombre, " ", apellido);

// asyncScheduler.schedule(saludar, 3000);
// asyncScheduler.schedule(saludar2, 2000, { nombre: "Isa", apellido: "Pastor" });

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state ", state);

    this.schedule(state + 1, 1000);
  },
  3000,
  0
);
// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
