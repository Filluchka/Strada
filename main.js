console.log('3' + 1); // 
console.log( ' Dick ' + 5 + ' sm '); // 
console.log(true + true + true + true); //true ёбанная еденица (всегда)

const a = 7;
const b = '7';
const с = 7;
console.log(a + b + с); // три топора ёпта
console.log(Number(a) + Number(b) + Number(с) ); // 5 - явное приведение

const d = 77;
const f = '7';
console.log(d + f); // 32a - автоматическое приведение
console.log(Number(d) + Number(f)); // NaN - явное приведение

const i = 3;
const g = '2a';
console.log(i + g); // 32a - автоматическое приведение
console.log(Number(i) + Number(g)); // NaN - явное приведение

String(123); // ‘123’
Number('3'); // 3
Boolean(1); // true
String(123); // ‘123’
String(123); // ‘123’
Number('3'); // 3
Boolean(1); // true
String(123); // ‘123’
String(123); // ‘123’
Number('3'); // 3
Boolean(1); // true
String(123); // ‘123’
String(123); // ‘123’
Number('3'); // 3
Boolean(1); // true
String(123); // ‘123’
