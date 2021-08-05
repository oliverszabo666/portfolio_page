const _load = () => {
  const nav = document.getElementById("nav");
  const navOpen = document.getElementById("nav-open");

  nav.addEventListener("click", () => {
    navOpen.classList.toggle("display");
  });
};
window.addEventListener("load", _load);
