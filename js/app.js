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