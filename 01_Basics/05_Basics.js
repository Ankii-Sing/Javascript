 "use script"
//  const dt = new Date()
//  console.log(dt)   // not readable format.
//  console.log(dt.toString());
//  console.log(dt.toDateString());
//  console.log(dt.toLocaleString());
//  console.log(dt.toLocaleDateString());
//  console.log(dt.setMonth(5).toString());
// console.log(typeof dt)

// const date = new Date(2024,5,25,2,25,20,2)
// console.log(date.toLocaleString())

// let dat = new Date('2024-5-26')
// console.log(dat.toLocaleString())

// let dte = new Date('2-25-2024')
// console.log(dte.toLocaleString())

let  Date  = Date.now() // wrong answer.
Date.toString('Default' ,{
    weekday : "long",

})
console.log(Date.toString())