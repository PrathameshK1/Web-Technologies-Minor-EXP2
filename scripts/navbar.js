console.log("connected");

function $(id) {
  return document.getElementById(id);
}

const navButton = document.querySelector(".menu-button");
const nav = document.querySelector(".navbar");

navButton.addEventListener("mouseup", toggleNav);

function toggleNav() {
  nav.classList.toggle("active");
  toggleMenuButton();
  toggleScroll();
}

function toggleMenuButton() {
  const isActive = nav.classList.contains("active");
  navButton.style.backgroundImage = isActive
    ? "url(./assets/shared/icon-close.svg)"
    : 'url("./assets/shared/icon-hamburger.svg")';
}

function toggleScroll() {
  const isActive = nav.classList.contains("active");
  document.body.style.height = isActive ? "100vh" : "auto";
  document.body.style.overflow = isActive ? "hidden" : "auto";
}

function handleScroll(e) {
  e.preventDefault();
}

window.addEventListener("scroll", handleScroll, { passive: false });
