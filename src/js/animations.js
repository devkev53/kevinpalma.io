const title = document.querySelector(".aboutTitle");
const picture = document.querySelector(".pictureWrapper");
const contentBg = document.querySelector(".info");

const elements = [title, picture, contentBg];

export function scrollAnimatedAbout() {
  const cb = (entries) => {
    entries.forEach((element) => {
      if (element.isIntersecting) {
        title.style.opacity = 1;
        contentBg.style.transition = " .6s all ease-in";
        contentBg.style.transitionDelay = ".2s";
        picture.style.transition = " .6s all ease-in";
        picture.style.transitionDelay = ".5s";
        contentBg.style.opacity = 1;
        picture.style.opacity = 1;
        picture.style.transform = "scale(1)";
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    // rootMargin: "0px 0px 250px 0px",
    threshold: 0.4,
  });

  observer.observe(document.querySelector("#about"));
}
