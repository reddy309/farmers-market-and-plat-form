// ================= DARK MODE =================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// JavaScript
const rtlBtn = document.getElementById("rtlBtn");

rtlBtn.addEventListener("click", () => {
  document.body.classList.toggle("rtl");
});


const showcaseButtons = document.querySelectorAll(".showcase-card button");

showcaseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Added ✔";
    setTimeout(() => {
      btn.innerText = "View Details";
    }, 1000);
  });
});

function payNow(){
  document.getElementById("payMsg").innerText =
  "Payment successful ✔ (Demo Mode)";
}
const plans = document.querySelectorAll(".pricing-card button");

plans.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Plan selected successfully ✔");
  });
});

document.querySelector(".enterprise-cta button").addEventListener("click", () => {
  alert("Enterprise team will contact you soon ✔");
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // close others
    faqItems.forEach(i => {
      if(i !== item){
        i.classList.remove("active");
      }
    });

    // toggle current
    item.classList.toggle("active");
  });

});

document.querySelectorAll(".cta-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Thank you for your interest ✔");
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("themeBtn");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

});