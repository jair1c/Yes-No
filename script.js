// Función para redirigir a la página "yes.html"
function nextPage() {
    window.location.href = "yes.html";
}

// Función para mover el botón "No" a una posición aleatoria
function moveButton() {
    const button = document.getElementById("noButton");
    
    // Obtener dimensiones de la ventana y el botón
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Generar nuevas coordenadas aleatorias dentro de los límites de la pantalla
    const newX = Math.random() * (screenWidth - buttonWidth);
    const newY = Math.random() * (screenHeight - buttonHeight);

    // Aplicar las nuevas coordenadas al botón con una animación
    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    
    // Agregar animación de "sacudida" para hacerlo más divertido
    button.classList.add("wiggle");
    setTimeout(() => {
        button.classList.remove("wiggle");
    }, 500);
}
