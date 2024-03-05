export function burguerBtnFunction() {
  const burguerBtn = document.querySelector(".burguer_btn");

  const linksMenu = document.querySelectorAll(".menu_link");

  burguerBtn.addEventListener("click", () => {
    burguerBtn.classList.toggle("openMenu");
  });

  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      burguerBtn.classList.remove("openMenu");
    });
  });
}
