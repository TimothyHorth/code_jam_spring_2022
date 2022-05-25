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
