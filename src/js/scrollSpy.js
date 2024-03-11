const d = document;
export function scrollSpy() {
  const $sections = d.querySelectorAll("section");

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`.nav_link[href="#${id}"]`).classList.add("active");
      } else {
        d.querySelector(`.nav_link[href="#${id}"]`).classList.remove("active");
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    // root,
    // rootMargin: "-250px",
    threshold: [0.5, 0.98],
  });
  $sections.forEach((el) => observer.observe(el));
}
