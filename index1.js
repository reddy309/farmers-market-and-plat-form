console.log("FarmFresh Website Loaded");

// Future features (dark mode, RTL can be added here)
const elements = document.querySelectorAll(".section, .card, .price-card, .stat-box");

function revealOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();