window.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card");
  
    if (!card) return;
  
    const wrapper = document.createElement("div");
    wrapper.classList.add("card-wrapper");
  
    const border = document.createElement("div");
    border.classList.add("card-border");
  
    // Insertar el wrapper en el DOM
    card.parentNode.insertBefore(wrapper, card);
    wrapper.appendChild(card);
    wrapper.appendChild(border);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const terminal = document.getElementById("terminal-output");
  
    const lines = [
      "$ login gabo",
      "> Password: ******",
      "> Acceso concedido ✅",
      "",
      "$ curl github.com/gabogarcia",
      "> Conectando a GitHub...",
      "> Información encontrada:",
      "",
      "  Nombre: Gabriel Alejandro García Angulo",
      "  Rol: Desarrollador en proceso 👨‍💻",
      "  Skills: C, C++, C#, Python, PHP, HTML, CSS, JavaScript",
      "  Experiencia: Aprendiendo todos los días desde cero",
      "",
      "$ echo \"Motivación personal\"",
      '> "Nunca paro de aprender, ni aunque me apaguen el monitor"',
      "",
      "$ logout",
      "> Sesión cerrada con éxito. Hasta pronto, Gabo.",
      ""
    ];
  
    let lineIndex = 0;
    let charIndex = 0;
    let typingInterval;
  
    function typeLine() {
      if (lineIndex >= lines.length) {
        terminal.classList.remove("typing-cursor");
        return;
      }
  
      const currentLine = lines[lineIndex];
      const existingText = terminal.textContent;
  
      if (charIndex < currentLine.length) {
        terminal.textContent = existingText + currentLine[charIndex];
        charIndex++;
      } else {
        terminal.textContent = existingText + "\n";
        lineIndex++;
        charIndex = 0;
      }
    }
  
    typingInterval = setInterval(() => {
      typeLine();
  
      if (lineIndex >= lines.length) {
        clearInterval(typingInterval);
      }
    }, 40);
  });
  