precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let contador = 0;

const card = document.querySelector('.card');
const span = document.getElementById('span');

card.addEventListener('click', e => {
    
    if(e.target.classList.contains('btnaumentar')){
        contador++
        span.textContent = contador
        document.getElementById("total").innerHTML = contador * precio2;
    }

    console.log(e.target.classList.contains('btndisminuir'))
    if(e.target.classList.contains('btndisminuir')){
        contador--
        span.textContent = contador
        document.getElementById("total").innerHTML = contador * precio2;
    }
    e.stopPropagation()
})

    document.body.addEventListener('click', e => {
        console.log('diste click')
})

var precio = "precio-inicial" ;
var precio2 = 400000;

