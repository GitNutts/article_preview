const btn = document.querySelector("button");
const share = document.querySelector(".share");

btn.addEventListener("click", function () {
  share.classList.toggle("show");
});
