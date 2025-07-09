const cambiarTitulo= ()=>{
    console.log('Desde la funcion cambiarTitulo')
    //quiero selecciona el titulo
    const titulo = document.getElementById('titulo-modificable')
    console.log(titulo)
    //modificar el color del titulo
    titulo.classList.add('text-info')
    // titulo.className = 'text-warning'
    // titulo.innerHTML = 'Hola <b>mundo</b>'
    titulo.textContent = 'Hola mundo'
}

const ocultarParrafo = () =>{
    console.log('desde la funcion ocultar Parrafo')
}

//buscar el boton rojo
// const btnRojo = document.getElementsByTagName('button')
// const btnRojo = document.getElementsByClassName('btn-danger')
const btnRojo = document.querySelector('.btn-danger')
console.log(btnRojo)

//agregar el evento click
btnRojo.addEventListener('click', ocultarParrafo)