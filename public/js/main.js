let isDebug = true;

const checkModalState = () => {
  if (isDebug) {
    return window.localStorage.getItem("closeModal") ?? false;
  }
};

// -*-*-*-*-*-*-*- BURGUER BUTTON FUNCION -*-*-*-*-*-*-*-
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

burguerBtnFunction();

// -*-*-*-*-*-*-*- MODAL CLOSE FUNCION -*-*-*-*-*-*-*-
export function closeModal(state) {
  const btnClose = document.querySelector("#btnClose");
  const btnCloseEnter = document.querySelector(".enterCloseBtn");
  const modal = document.querySelector("#modal");
  console.log(state());

  if (state()) {
    modal.classList.add("close");
  }

  const setInLocalStorage = () => {
    window.localStorage.setItem("closeModal", true);
  };

  btnClose.addEventListener("click", function (e) {
    modal.classList.add("close");
    setInLocalStorage();
  });

  btnCloseEnter.addEventListener("click", function (e) {
    modal.classList.add("close");
    setInLocalStorage();
  });
}

closeModal(checkModalState);

const btnCv = document.querySelector(".downloadCVBtn");

btnCv.addEventListener("click", () => {
  window.open("./assets/CV Bellini 2023.pdf", "_blank");
});
