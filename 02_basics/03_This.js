// 'use script'

// const car = {
//     name : "Bhugatti",
//     price : "Bahoot mehengi",
//     milage : "ekdum bekar",
//     showoff : function(){   // very improtant, name of func is key..!
//         console.log(`price is ${this.price}`);
//         console.log(this);
//     }
   
// }
// console.log(car.name);
// car.showoff()

// function chai(){        //normal function
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => { // this arrow function.
    let username = "hitesh"
    console.log(this);
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }