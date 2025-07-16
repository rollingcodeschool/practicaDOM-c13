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

const obtenerNombre = (e)=>{
    e.preventDefault()
    console.log(e)
    console.log('desde la funcion obtener nombre')
    //tome el texto del input 
    const input = document.querySelectorAll('.form-control')
    console.log(input[1].value)
    const parrafos = document.querySelectorAll('p')
    console.log(parrafos[5])
    //mostrar el texto en el parrafo que esta abajo del form
    // parrafos[5].textContent = parrafos[5].textContent + input[1].value
    parrafos[5].textContent += input[1].value
    formulario.reset()
}

const crearTarea = (e)=>{
    e.preventDefault();
    console.log('desde la funcion crear tarea')
    //1- tomar la tarea del input
    const inputTarea = document.getElementById('tarea').value.trim()
    console.log(inputTarea)
    //2- crear una card con el texto de la tarea anterior
    const divcol = document.createElement('div'); //<div></div>
    const divcard = document.createElement('div'); //<div></div>
    const divcardBody = document.createElement('div'); //<div></div>
    const h5 = document.createElement('h5'); //<div></div>
    const p = document.createElement('p'); //<div></div>
    divcol.className= 'col-md-4 col-lg-3'// <div class="col-md-4 col-lg-3">
    divcard.className='card h-100'
    divcardBody.className='card-body'
    h5.className='card-title'
    h5.textContent = 'Tarea ✔'
    p.className = 'card-text'
    p.textContent = inputTarea

    const row = document.querySelector('.row-gap-3')
    //3- agregar la card a la grilla
    row.appendChild(divcol)
    divcol.appendChild(divcard)
    divcard.appendChild(divcardBody)
    divcardBody.appendChild(h5)
    // divcardBody.prepend(p)// este metodo agrega un nodo hijo al inicio
    divcardBody.appendChild(p)// este metodo agrega un nodo hijo al final
    //4-resetear el formulario
    formularioTarea.reset()
}
//buscar el boton rojo
// const btnRojo = document.getElementsByTagName('button')
// const btnRojo = document.getElementsByClassName('btn-danger')
const btnRojo = document.querySelector('.btn-danger')
const btnAmarillo = document.querySelector('.btn-warning')
const formulario = document.querySelector('#formNombre')
const formularioTarea = document.querySelector('#formTareas')
console.log(formularioTarea)

//agregar el evento click
btnRojo.addEventListener('click', ocultarParrafo)
btnAmarillo.addEventListener('click', borrarParrafo)
formulario.addEventListener('submit', obtenerNombre)
formularioTarea.addEventListener('submit', crearTarea)
