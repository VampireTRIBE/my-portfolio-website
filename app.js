const navMenuCheckbox = document.querySelector("#nav-menu-options");
const navToggle = document.querySelector(".nav-options-togle");

navMenuCheckbox.addEventListener("change", () => {
  if (navMenuCheckbox.checked) {
    navToggle.style.right = "0px";
  } else {
    navToggle.style.right = "-500px";
  }
});
