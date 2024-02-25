const button = document.querySelectorAll('.button')
// console.log(button);
const body = document.querySelector('body');
// console.log(body);

button.forEach( function(button) {
    // console.log(button)
    button.addEventListener('click',function(b){
        console.log(b)
        console.log(b.target)  // gives the whole HTML.
        if(button.id === 'grey')
            body.style.backgroundColor = 'grey'
        if(button.id === 'white')
            body.style.backgroundColor = 'white'
        if(button.id === 'blue')
            body.style.backgroundColor = button.id
        if(button.id === 'yellow')
            body.style.backgroundColor = button.id
    })
})