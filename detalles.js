// Cargar el sonido
const clickSound = new Audio('logos/cartoon_wink_magic_sparkle-6896.mp3-sound.mp3'); // Ruta al archivo de sonido

// Agregar evento al botón
document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault();  // Evitar el envío del formulario
    clickSound.play();    // Reproducir el sonido

    const inputUGC = document.querySelector('#ugc').value;
    const inputBarrio = document.querySelector('#barrio').value;

    if (inputUGC === '' || inputBarrio === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        alert('Formulario enviado correctamente.');
    }
});
