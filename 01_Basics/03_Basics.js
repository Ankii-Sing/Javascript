//in this we will be talking about the strings mostly.
const sym = new String('Ankit$')
// console.log(sym[4]);
sym.toUpperCase();
// console.log(sym.toUpperCase());  // this will not chage the original string.

// string  s = 'ankit';      will not run.
// console.log(sym.substring(1,3));       // 1 nd 2nd char will print.

// console.log(sym.substring(-1,4));    // in -ve case also the string will print from the starting only.

var myGameName = String('   Counter Strike  ');
// console.log(myGameName);
// console.log(myGameName.trim());

let url = 'https://www.youtube.com/watch?v=list=PLuCle2y-t7&index=29'
let url1 = " ANK/it"
// console.log(url);

console.log(url.replace('/','*'));
// console.log(url.split("/"));  // this will not change the Original String.

console.log(url1.trim().split("/"));



