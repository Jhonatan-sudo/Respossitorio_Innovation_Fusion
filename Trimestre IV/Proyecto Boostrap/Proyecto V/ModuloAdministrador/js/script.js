document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".toggle");
  const slidebar = document.querySelector(".slidebar");

  toggle.addEventListener("click", () => {
    slidebar.classList.toggle("close");
  });
});
