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
    //buscar el parrafo
    const parrafo = document.getElementById('parrafo');
    //ocultar el parrafo hidden o d-none
    parrafo.classList.toggle('visually-hidden')
    //cambiar el texto del boton por mostrar parrafo
    if(btnRojo.textContent === 'Ocultar párrafo' ){
        //cambiar el estilo del boton por otro color
        btnRojo.textContent = 'Mostrar párrafo'
        btnRojo.classList.replace('btn-danger', 'btn-success')
    }else{
         btnRojo.textContent = 'Ocultar párrafo'
         btnRojo.classList.replace('btn-success', 'btn-danger')
    }
}

const borrarParrafo = ()=>{
    console.log('desde la funcion borrar parrafo')
    //buscar el parrafo
    const parrafos = document.getElementsByTagName('p');
    console.log(parrafos[4])
    //borrar el parrafo
    parrafos[4].remove()
    //deshabilitar el boton de eliminar
    btnAmarillo.classList.add('disabled')
}
//buscar el boton rojo
// const btnRojo = document.getElementsByTagName('button')
// const btnRojo = document.getElementsByClassName('btn-danger')
const btnRojo = document.querySelector('.btn-danger')
const btnAmarillo = document.querySelector('.btn-warning')
console.log(btnAmarillo)

//agregar el evento click
btnRojo.addEventListener('click', ocultarParrafo)
btnAmarillo.addEventListener('click', borrarParrafo)

