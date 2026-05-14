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
