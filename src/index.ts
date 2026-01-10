import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
  next: (value) => console.log("siguiente [next]: ", value),
  error: (err) => console.warn("error [observer]: ", err),
  complete: () => console.info("completado [observer] "),
};
