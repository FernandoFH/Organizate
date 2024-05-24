const message = document.querySelector('div');
const boton = document.querySelector('#change-message');

boton.addEventListener('click', () =>{
    message.textContent = "Nuevo Mensaje";
    alert("Hi!")
})
