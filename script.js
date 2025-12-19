const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
const pantallaPregunta = document.getElementById('pregunta-screen');
const pantallaRespuesta = document.getElementById('respuesta-screen');

// 1. Lógica para que el botón "No" se escape
btnNo.addEventListener('mouseover', () => {
    // Calculamos una posición aleatoria
    const randomX = Math.floor(Math.random() * 200) - 100; // Entre -100 y 100
    const randomY = Math.floor(Math.random() * 200) - 100;

    // Usamos GSAP para moverlo suavemente (como en el video)
    gsap.to(btnNo, {
        x: randomX,
        y: randomY,
        duration: 0.3,
        ease: "power2.out"
    });
});

// 2. Lógica al hacer clic en "Sí"
btnSi.addEventListener('click', () => {
    
    // Animación de salida (Fade out) usando GSAP
    gsap.to(pantallaPregunta, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            pantallaPregunta.style.display = "none";
            pantallaRespuesta.style.display = "block";
            
            // Animación de entrada (Fade in)
            gsap.fromTo(pantallaRespuesta, 
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
            );

            // Disparar confeti
            lanzarConfeti();
        }
    });
});

function lanzarConfeti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}