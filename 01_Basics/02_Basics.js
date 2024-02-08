"use script"
// console.log(typeof true);
// console.log(typeof " ");

//  creating and accessing the object
const ank={
        name : 'ankit',
        age : 23,
        rollno : 30
}
// console.log(ank.name);
// console.log(`the name is ${ank.name} and the age is ${ank.age}`);

// two same symbols are not same
 const a = Symbol(123);
 const b = Symbol(123);
 
 if(a==b)
 console.log('they are same by ==');
else 
console.log('they are not same by ==');

if(a===b)
console.log('they are same by ===');
else 
console.log('they are not same by ===');

