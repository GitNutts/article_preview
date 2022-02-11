const btn = document.querySelector(".arrow");
const share = document.querySelector(".share");

btn.addEventListener("click", function () {
  share.classList.toggle("show");
});
