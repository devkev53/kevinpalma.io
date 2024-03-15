import { animatedAbout } from "./animations";
const d = document;

export function scrollSpy() {
  const viewPortHeight = -(window.innerHeight - 80) + "px";
  const $sections = d.querySelectorAll("section");
  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelectorAll(`.nav_link[href="#${id}"]`).forEach((link) =>
          link.classList.add("active")
        );
      } else {
        d.querySelectorAll(`.nav_link[href="#${id}"]`).forEach((link) => {
          link.classList.remove("active");
        });
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    // root,
    rootMargin: `0px 0px ${viewPortHeight} 0px`,
    // threshold: ,
  });
  $sections.forEach((el) => observer.observe(el));
}
