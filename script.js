document.addEventListener("DOMContentLoaded", () => {
    const targetContainer = document.getElementById("animated-text-container");
    const text = "Ingeniero Mecatrónico Analista de datos"; // Texto a escribir
    const typingSpeed = 100; // Velocidad de escritura en ms
  
    let index = 0;
  
    function type() {
      if (index < text.length) {
        targetContainer.textContent = text.substring(0, index + 1); // Muestra el texto progresivamente
        index++;
        setTimeout(type, typingSpeed); // Llama de nuevo a la función después de typingSpeed
      }
    }
  
    type(); // Inicia el efecto de escritura
  });
  