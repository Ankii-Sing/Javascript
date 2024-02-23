// using for of loop
const a = [1,2,3,4,5,'ank','A','X']
for (const index of a) {
    // console.log(index)
}
// use map -> it stores key value pairs
const m =  new Map();  // please use capital Map.
m.set('A',12);
m.set('b',12);
m.set('x',12);
m.set('X',12);

for (const [i,j] of m) { // here destructring of loop is done.
    // console.log(`key is ${i} and vlaue is ${j}`);    
}

// but this will not work for objects , lets try.

const myObj = {
    'game' : 'Foza',
    'Laptop' : 'Prediator',
    'Ram' : '16GB'
};
// console.log(myObj);
for (const i of myObj) {
    console.log(i);       // will get an error obj is not iteratable.
}

