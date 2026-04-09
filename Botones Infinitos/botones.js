const boton = document.querySelector('button')

boton.addEventListener('click',nuevo)

function nuevo(){
    const nuevoboton = document.createElement('button')
    nuevoboton.textContent = 'Me multiplico como tus problemas'
    nuevoboton.addEventListener('click', nuevo)
    document.body.appendChild(nuevoboton)
}
