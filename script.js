const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");

/* open menu when click at toggle icon */
toggle.addEventListener("click", handleClick);
function handleClick() {
  menu.classList.add("active");
  overlay.classList.add("active");
}

/* close menu when click at X icon */
close.addEventListener("click", handleClose);
function handleClose() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}

/* close menu when click at overlay */
overlay.addEventListener("click", handleClickOutSide);
function handleClickOutSide() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}
