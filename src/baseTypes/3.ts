// Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?

let some:unknown;
some = 'Text';
let str: string;

if (typeof some === "string") {   // typeof type guard
  str = some;
}

export {};