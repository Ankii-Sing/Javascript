// discuss for in loops.
const Laptop = {
    lap1 : 'Predator',
    lap2 : 'ROG G15',
    lap3 : 'Dell G15',
    lap4 : 'Razor',
}
for (const x in Laptop) {
//    console.log(x); // this will only print the keys.
   console.log(`key is ${x} and value is ${Laptop[x]}`);
}
