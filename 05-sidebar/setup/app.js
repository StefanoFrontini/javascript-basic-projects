const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
