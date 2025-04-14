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