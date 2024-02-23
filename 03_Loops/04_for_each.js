// all about for each loop
const lang = [ 'c','cpp','java','python']
// lang.forEach( (item) => {console.log(item);})

lang.forEach( (item,index,arr) => {
    // console.log(`${item} and ${index} and ${arr[0]}`);
})

// array of objects
const lap =[
    { lapname : 'Predeator',
    price  : '45K'
    },
    { lapname : 'Alineware',
    price  : '105K'
    },
    { lapname : 'Razor',
    price  : '145K'
    }
]

lap.forEach( (obj) => {
    console.log(`name => ${obj.lapname} && price => ${obj.price}`);
})
