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
