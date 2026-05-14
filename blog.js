
const rtlBtn = document.getElementById("rtlBtn");

rtlBtn.addEventListener("click", () => {
  document.body.classList.toggle("rtl");
});


// Simple search animation (optional)
const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {
  alert("Search functionality will be connected to blog database!");
});
// Optional animation trigger (scroll effect can be added later)
console.log("Featured Blog Section Loaded");
// Simple load animation trigger
window.addEventListener("load", () => {
  console.log("Farming Tips Section Loaded");
});

// Simple animation trigger
window.addEventListener("load", () => {
  console.log("Market Trends Section Loaded");
});

// Simple load animation
window.addEventListener("load", () => {
  console.log("Farmer Success Stories Loaded");
});

// Simple load animation trigger
window.addEventListener("load", () => {
  console.log("Vendor Tips Section Loaded");
});
// Simple load animation trigger
window.addEventListener("load", () => {
  console.log("Technology in Farming Section Loaded");
});

// Simple load animation trigger
window.addEventListener("load", () => {
  console.log("Announcements Section Loaded");
});

// Simple load animation trigger
window.addEventListener("load", () => {
  console.log("Visual Blog Section Loaded");
});

// Simple interaction for related posts
document.querySelectorAll(".related-card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Open related blog post!");
  });
});

function addComment() {
  const name = document.getElementById("name").value;
  const text = document.getElementById("commentText").value;

  if (!name || !text) {
    alert("Please fill all fields");
    return;
  }

  const commentList = document.getElementById("commentList");

  const comment = document.createElement("div");
  comment.classList.add("comment");

  comment.innerHTML = `
    <h4>${name}</h4>
    <p>${text}</p>

    <div class="actions">
      <span onclick="likeComment(this)">👍 Like (0)</span>
      <span onclick="replyComment(this)">💬 Reply</span>
    </div>

    <div class="reply-box"></div>
  `;

  commentList.prepend(comment);

  document.getElementById("name").value = "";
  document.getElementById("commentText").value = "";
}

/* LIKE SYSTEM */
function likeComment(el) {
  let text = el.innerText;
  let count = parseInt(text.match(/\d+/)[0]);
  count++;
  el.innerText = `👍 Like (${count})`;
}

/* REPLY SYSTEM */
function replyComment(el) {
  const replyBox = el.parentElement.nextElementSibling;

  const input = document.createElement("div");
  input.innerHTML = `
    <input type="text" placeholder="Write reply...">
    <button onclick="postReply(this)">Post</button>
  `;

  replyBox.appendChild(input);
}

/* POST REPLY */
function postReply(btn) {
  const input = btn.previousElementSibling;
  const text = input.value;

  if (!text) return;

  const replyBox = btn.parentElement.parentElement;

  const reply = document.createElement("p");
  reply.textContent = "↳ " + text;

  replyBox.appendChild(reply);
  btn.parentElement.remove();
}