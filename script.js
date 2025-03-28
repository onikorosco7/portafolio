document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll para la navegación
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Animación de habilidades al hacer scroll
    const skillBars = document.querySelectorAll('.skill-fill');
    function animateSkills() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
        });
    }
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-bar').forEach(skill => {
        observer.observe(skill);
    });

    // Validación del formulario de contacto
    document.querySelector(".contact-form").addEventListener("submit", function (e) {
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            e.preventDefault();
            alert("Por favor, completa todos los campos.");
        }
    });

    // ✍️ EFECTO DE ESCRITURA en el Hero
    const heroText = document.querySelector(".hero h1");
    const text = "Bienvenido a mi Portafolio";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            heroText.innerHTML = text.substring(0, index + 1);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});