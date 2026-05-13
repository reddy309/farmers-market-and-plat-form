// Simple UI interaction for icons

document.addEventListener("DOMContentLoaded", () => {

  const moon = document.querySelector(".fa-moon");

  moon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

});

document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.borderBottom = "4px solid #2e7d32";
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderBottom = "none";
  });
});