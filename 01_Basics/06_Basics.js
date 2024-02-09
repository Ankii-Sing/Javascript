// About Arrays
const arr = [10,50,20,"Ankit",'X,','Y']
// console.log(arr)
// console.log(arr.length)
// console.log(arr[5]) // retrn the index.
// console.log(arr.push('Tinku'))
// console.log(arr.unshift(500)) // add elemt to str.
// console.log(arr) 

const anr = arr.join(); // join the elemtnts.
// console.log(anr)

// const mood = arr.slice(4);
// console.log(mood)
// console.log(arr) 

// const lau = arr.splice(4);
// console.log(lau)
// console.log(arr) 

// Array part two.

const st = [1,2,8,4,6,'A','a']
const str = ['X,','Y']
// console.log(st.push(str));
// console.log(st);

const merge = st.concat(str);
// console.log(merge)
// other inmprtant method to merge
const array = [...st,...str];
// console.log(array)

// console.log(Array.isArray(array));
console.log(Array.from(''));

const a = 'a'
const b = 'b'
const c = '1'
const d = '2'
// console.log(Array.of(a,b,c,d))