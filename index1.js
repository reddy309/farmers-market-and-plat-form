// DARK MODE

const modeBtn = document.querySelector(".mode-btn");

modeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){

    modeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

  } else {

    modeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

  }

});
/* ==========================================

   RTL TOGGLE

========================================== */
 
const rtlToggle = document.getElementById("rtlToggle");

const rtlLabel = document.getElementById("rtlLabel");
 
/* Load saved direction */

const savedDirection = localStorage.getItem("site-direction");
 
if (savedDirection) {

  document.documentElement.setAttribute("dir", savedDirection);

}
 
/* Update button text */

function updateRTLLabel() {

  const currentDir = document.documentElement.getAttribute("dir");
 
  if (currentDir === "rtl") {

    rtlLabel.textContent = "RTL";

  } else {

    rtlLabel.textContent = "LTR";

  }

}
 
updateRTLLabel();
 
/* Toggle direction */

rtlToggle?.addEventListener("click", () => {

  const html = document.documentElement;

  const currentDir = html.getAttribute("dir");
 
  if (currentDir === "rtl") {

    html.setAttribute("dir", "ltr");

    localStorage.setItem("site-direction", "ltr");

  } else {

    html.setAttribute("dir", "rtl");

    localStorage.setItem("site-direction", "rtl");

  }
 
  updateRTLLabel();

});
 

 


 

 