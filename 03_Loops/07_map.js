// using maps

const arr = [1,2,3,4,5,6,7,8,9,10]

const a = arr.map( (i) => i-1)
            .map((i) => i * 10)
            .filter( (i) => i > 40)
console.log(a);