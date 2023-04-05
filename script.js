const hamburgerEl = document.querySelector(".hamburger-icon");
const menuEl = document.querySelector(".menu");
const menuWidth = 350;

hamburgerEl.addEventListener("click", (e) => {
  e.stopPropagation();
  menuEl.classList.toggle("show");
  // If hiding the menu
  if (!menuEl.classList.contains("show")) return;
  // If showing the menu
  resizeMenu();
});

window.addEventListener("click", (e) => {
  menuEl.classList.remove("show");
});

window.addEventListener("resize", (e) => {
  menuEl.classList.remove("show");
  if (window.innerWidth >= 768) {
    menuEl.style.width = "auto";
  }
});

function resizeMenu() {
  const { right, width } = menuEl.getBoundingClientRect();
  const rightOffset = window.innerWidth - right;
  // If the window width is less than the menu element,
  // resize the menu element
  // Otherwise, if the window width is greater than the menu element,
  // reset the menu element to its default width
  if (window.innerWidth <= menuWidth + rightOffset * 2) {
    const newWidth = window.innerWidth - rightOffset * 2;
    menuEl.style.width = newWidth + "px";
  } else {
    menuEl.style.width = menuWidth + "px";
  }
}
