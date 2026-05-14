// ================= DARK MODE =================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ================= RTL MODE =================
const rtlBtn = document.getElementById("rtlBtn");

rtlBtn.addEventListener("click", () => {
  document.body.classList.toggle("rtl");
});

// Simple animation trigger
window.addEventListener("load", () => {
  console.log("Services Overview Loaded");
});

// Trigger load animation
window.addEventListener("load", () => {
  console.log("Key Features Section Loaded");
});
// simple load log
window.addEventListener("load", () => {
  console.log("Farmer Success Stories Loaded");
});

// simple load animation log
window.addEventListener("load", () => {
  console.log("Featured Products Section Loaded");
});

// simple load trigger
window.addEventListener("load", () => {
  console.log("Market Trends Section Loaded");
});