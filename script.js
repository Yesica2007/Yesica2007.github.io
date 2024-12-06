document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        const slidesContainer = document.querySelector('.slides');
        if (slidesContainer) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

    // Funciones para el modal
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    const closeButton = document.querySelector('.close');

    const images = document.querySelectorAll('.imagen img');

    // Mostrar el modal al hacer clic en una imagen
    images.forEach(image => {
        image.onclick = function() {
            modal.style.display = "block";  // Muestra el modal
            modalImage.src = this.src;     // Asigna la imagen al modal
            caption.innerHTML = this.alt;  // Asigna el texto alternativo (alt) al caption
        };
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    if (closeButton) {
        closeButton.onclick = function() {
            modal.style.display = "none"; // Oculta el modal
        };
    }

    // Cerrar el modal si se hace clic fuera de la imagen
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Oculta el modal
        }
    };
});
