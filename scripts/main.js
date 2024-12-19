// Cargar el navbar dinámicamente
fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("navbar-container").innerHTML = data;

        // Inicializar interacciones de Bootstrap
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
        document.body.appendChild(script);

        // Agregar lógica para el navbar después de cargar
        const navbar = document.querySelector(".navbar");

        // Cambiar estilos del navbar al hacer scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });

        // Cambiar la clase "active" dinámicamente
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
            link.addEventListener("click", () => {
                links.forEach((l) => l.classList.remove("active"));
                link.classList.add("active");
            });
        });
    });
