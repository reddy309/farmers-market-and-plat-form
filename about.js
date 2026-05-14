document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("themeBtn");
  const rtlBtn = document.getElementById("rtlBtn");

  console.log(themeBtn, rtlBtn); // (check if buttons found)

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  if (rtlBtn) {
    rtlBtn.addEventListener("click", () => {
      document.body.classList.toggle("rtl");
    });
  }

});



const serviceBoxes = document.querySelectorAll(".service-box");

serviceBoxes.forEach(box => {
  box.addEventListener("mouseenter", () => {
    box.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  });
});

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});