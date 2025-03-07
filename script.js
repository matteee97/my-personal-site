document.addEventListener("DOMContentLoaded", () => {
    let item = document.querySelector(".icon-hamburger");
    if (item) {
      item.addEventListener("click", function () {
        document.body.classList.toggle("menu-open");
      });
    }
  
    // Seleziona il bottone
    const modeToggle = document.getElementById("mode-toggle");
    if (!modeToggle) return;
  
    // Funzione per applicare il tema
    const applyTheme = () => {
      const root = document.documentElement;
      const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
  
      root.style.setProperty("--cl-1", isDarkMode ? "#062138" : "#07518e");
      root.style.setProperty("--cl-2", isDarkMode ? "#000" : "#111011");
      root.style.setProperty("--cl-3", isDarkMode ? "#355671" : "#e1e3f0");
      root.style.setProperty("--cl-3-transparent", isDarkMode ? "#06213880" : "#ffffff8d");
      root.style.setProperty("--cl-mode", isDarkMode ? "#ada55a5f" : "#062138");
  
      modeToggle.textContent = isDarkMode ? "🌙" : "☀️";
    };
  
    // Inizializza lo stato del tema
    applyTheme();
  
    // Event listener per il click del bottone
    modeToggle.addEventListener("click", () => {
      const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
      localStorage.setItem("dark-mode", isDarkMode ? "disabled" : "enabled");
      applyTheme();
      modeToggle.textContent = isDarkMode ? "🌙" : "☀️";
    });
  
    // Effetto hover per cambiare icona
    modeToggle.addEventListener("mouseenter", () => {
      modeToggle.textContent = localStorage.getItem("dark-mode") === "enabled" ? "☀️" : "🌙";
    });
  
    // Ripristina il contenuto originale quando il mouse esce dal bottone
    modeToggle.addEventListener("mouseleave", applyTheme);
});