const hamburgerEl = document.querySelector(".hamburger");
const hamburgerMenuEl = document.querySelector(".hamburger-menu");

hamburgerEl.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburgerMenuEl.classList.toggle("hide");
  if (hamburgerMenuEl.classList.contains("hide")) return;

  const { right, width } = hamburgerMenuEl.getBoundingClientRect();
  const rightOffset = screen.width - right;

  // If the screen width is less than the hamburger menu element,
  // resize the hamburger menu element
  // Otherwise, if the screen width is greater than the hamburger menu element,
  // Reset the hamburger menu element to its default width
  if (screen.width < width + rightOffset * 2) {
    const newWidth = screen.width - rightOffset * 2;
    hamburgerMenuEl.style.width = newWidth + "px";
  } else if (screen.width > width + rightOffset * 2) {
    hamburgerMenuEl.style.width = "35rem";
  }
});

window.addEventListener("click", (e) => {
  hamburgerMenuEl.classList.add("hide");
});

window.addEventListener("resize", (e) => {
  if (screen.width >= 768) {
    hamburgerMenuEl.classList.add("hide");
  }
});
