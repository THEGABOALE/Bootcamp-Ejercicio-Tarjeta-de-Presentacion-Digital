// Cambiar el color del navbar al hacer scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#45a049";
    } else {
        navbar.style.backgroundColor = "#4CAF50";
    }
});

// Animaciones cuando los elementos aparecen en pantalla
const elementos = document.querySelectorAll(".animado");

const observar = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        } else {
            entrada.target.classList.remove("visible");
        }
    });
});

elementos.forEach((el) => observar.observe(el));

// Navbar dinámico
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
    link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Modal al hacer clic en un botón
document.querySelector("#btn-modal").addEventListener("click", () => {
    alert("¡Gracias por visitar mi portafolio!");
});
