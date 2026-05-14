function addProduct() {
  alert("Add Product Clicked 🌱");
}

function uploadStock() {
  alert("Upload Stock Opened 📤");
}

function viewReports() {
  alert("Opening Reports 📊");
}

function support() {
  alert("Contact Support 📞");
}

function addNewProduct() {
  alert("New Product Added Successfully 🌱");
}

function processOrder() {
  alert("Order moved to Processing 🔵");
}

function cancelOrder() {
  alert("Order Cancelled ❌");
}

function deliverOrder() {
  alert("Order Marked as Delivered 🟢");
}

function addProduct() {
  alert("Product Added Successfully 🌱");
}

function withdrawMoney() {
  alert("Withdrawal Request Sent Successfully 💸");
}

function openLogout() {
  document.getElementById("logoutPopup").style.display = "flex";
}

function closeLogout() {
  document.getElementById("logoutPopup").style.display = "none";
}

function logout() {
  alert("Logged out successfully 🚪");
  window.location.href = "login.html"; // redirect page
}

// JavaScript
const rtlBtn = document.getElementById("rtlBtn");

rtlBtn.addEventListener("click", () => {
  document.body.classList.toggle("rtl");
});
