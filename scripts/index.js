//enabling skills Bars to animate only when in viewport
const element = document.querySelector(".about__grid");
const skillBars = [...document.querySelectorAll(".about__skill-progress")];

const observer = new IntersectionObserver((entries) => {
  skillBars.forEach((bar) => {
    bar.classList.toggle(
      "about__skill-progress_animation",
      entries[0].isIntersecting
    );
  });
});

observer.observe(element);

//adding parrallax scrolling effect with rellaxJS library
let rellax = new Rellax(".rellax");

const menuButton = document.querySelector(".nav__hmburger-button");
const menuLinks = document.querySelector(".nav__links");
const linksList = Array.from(menuLinks.querySelectorAll(".nav__link"));
const navBar = Array.from(document.querySelectorAll(".nav__bar"));
const toggleMenuButton = () => {
  menuLinks.classList.toggle("nav__links_active");
  menuButton.classList.toggle("nav__hmburger-button_open");
  navBar.forEach((bar) => {
    bar.classList.toggle(`${bar.classList[1]}_active`);
  });
};
menuButton.addEventListener("click", () => toggleMenuButton());
linksList.forEach((link) => {
  link.addEventListener("click", () => toggleMenuButton());
});
