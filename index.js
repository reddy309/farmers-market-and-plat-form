// CREATE LUCIDE ICONS
lucide.createIcons();


// DARK MODE TOGGLE
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});


// RTL TOGGLE
const rtlToggle = document.getElementById("rtl-toggle");

rtlToggle.addEventListener("click", () => {

  const html = document.documentElement;

  if(html.getAttribute("dir") === "ltr"){

    html.setAttribute("dir", "rtl");

  } else {

    html.setAttribute("dir", "ltr");
  }

});


// ACTIVE NAVIGATION LINK
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item => {
      item.classList.remove("active-link");
    });

    link.classList.add("active-link");

  });

});


// BUTTON HOVER EFFECT
const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn"
);

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-2px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0px)";

  });

});


// FEATURE CARD MOBILE TAP EFFECT
const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach(card => {

  card.addEventListener("touchstart", () => {

    card.style.transform = "scale(0.97)";

  });

  card.addEventListener("touchend", () => {

    card.style.transform = "scale(1)";

  });

});


// PRICING CARD SELECTION
const pricingCards = document.querySelectorAll(".pricing-card");

pricingCards.forEach(card => {

  card.addEventListener("click", () => {

    pricingCards.forEach(item => {
      item.classList.remove("selected-card");
    });

    card.classList.add("selected-card");

  });

});
