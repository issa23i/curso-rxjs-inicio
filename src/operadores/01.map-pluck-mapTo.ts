import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5)
//   .pipe(map<number, string>((val) => (val * 10).toString()))
//     .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

// const keyUpCode$ = keyUp$.pipe(map((evnt) => evnt.key));

// keyUpCode$.subscribe((code) => console.log("map", code));

// const keyUpPluck$ = keyUp$.pipe(pluck("key"));

// keyUpPluck$.subscribe((code) => console.log("map", code));

const keyUpMapTo$ = keyUp$.pipe(mapTo("tecla presionada"));

keyUpMapTo$.subscribe((code) => console.log("mapTo", code));
