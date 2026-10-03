const counterElement = document.getElementById('counter');
const loaderWrapper = document.getElementById('loader-wrapper');
const mainContent = document.getElementById('main-content');
const images = document.querySelectorAll('#imageSlider img');

let currentProgress = 0;
let currentImageIndex = 0;
const totalImages = images.length;

// Velocidad de carga (intervalo de milisegundos por cada 1% de avance)
const loadingInterval = setInterval(() => {
    currentProgress += 1;
    counterElement.textContent = currentProgress + '%';

    // Cambiar de imagen de forma dinámica según el porcentaje de avance
    let targetImageIndex = Math.floor((currentProgress / 100) * totalImages);
    if (targetImageIndex >= totalImages) {
        targetImageIndex = totalImages - 1;
    }

    if (targetImageIndex !== currentImageIndex) {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = targetImageIndex;
        images[currentImageIndex].classList.add('active');
    }

    // Al llegar al 100% se oculta el loader y se muestra la página principal
    if (currentProgress >= 100) {
        clearInterval(loadingInterval);
        
        // Efecto de desvanecimiento del loader
        loaderWrapper.style.opacity = '0';
        loaderWrapper.style.visibility = 'hidden';
        
        // Mostrar contenido principal
        mainContent.classList.add('visible');
    }
}, 35); // Ajusta este valor si deseas que cargue más rápido o más lento