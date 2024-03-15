// Anima los elementos de la sec
let cont = 0;

const titleAnimation = [{ opacity: 0 }, { opacity: 1 }];
const titleAnimationTiming = {
  duration: 1000,
  iterations: 1,
};
// const imgAnimation = [{ transform: rotate }];
const title = document.querySelector(".aboutTitle");
const picture = document.querySelector(".pictureWrapper");
const contentBg = document.querySelector(".aboutContent");

export const animatedAbout = (state) => {
  while (state === true && cont < 1) {
    title.animate(titleAnimation, titleAnimationTiming);
    title.style.opacity = 1;
    cont += 1;
  }
};
