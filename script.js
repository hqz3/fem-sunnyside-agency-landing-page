const hamburgerEl = document.querySelector(".header__hamburger-icon");

const menuEl = document.querySelector(".header__menu");
const MENU_WIDTH = 325;

hamburgerEl.addEventListener("click", (e) => {
  e.stopPropagation();
  menuEl.classList.toggle("header__menu--show");
  // If hiding the menu
  if (!menuEl.classList.contains("header__menu--show")) return;
  // If showing the menu
  resizeMenu();
});

window.addEventListener("click", (e) => {
  menuEl.classList.remove("header__menu--show");
});

window.addEventListener("resize", (e) => {
  menuEl.classList.remove("header__menu--show");
  if (window.innerWidth >= 768) {
    menuEl.style.width = "auto";
  }
});

function resizeMenu() {
  const { right } = menuEl.getBoundingClientRect();
  const rightOffset = window.innerWidth - right;
  // If the window width is less than the menu element,
  // resize the menu element
  // Otherwise, if the window width is greater than the menu element,
  // reset the menu element to its default width
  if (window.innerWidth <= MENU_WIDTH + rightOffset * 2) {
    const newWidth = window.innerWidth - rightOffset * 2;
    menuEl.style.width = newWidth + "px";
  } else {
    menuEl.style.width = MENU_WIDTH + "px";
  }
}
