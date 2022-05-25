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
ScrollOut({
  threshold: 0.6,
});
