let isDebug = true;

const checkModalState = () => {
  if (isDebug) {
    return window.localStorage.getItem("closeModal") ?? false;
  }
};

import { burguerBtnFunction } from "./burguerBtn";
import { closeModal } from "./workinSiteModal";

burguerBtnFunction();
closeModal(checkModalState);
