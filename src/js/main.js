import { consoleText } from "./consoleText";
import { scrollSpy } from "./scrollSpy";
import { scrollAnimatedAbout } from "./animations";
import { themeController } from "./theme";

// EXECUTE THE SCROLLL SPY FOR ACTIVATE THE NAVLINKS
scrollSpy();

// EXECUTE THE SCROLLL SPY FOR ANIMATE ABOUT
scrollAnimatedAbout();

// EXECUTE THE THEME CONTROLLER
themeController();

// EXECUTE FUNCIONT CONSOLE TEXT
let languageConsoleText = () => {
  let path = window.location.pathname;
  let tagetId = "consoleText";
  if (path.includes("en")) {
    consoleText(
      ["Systems Engineer", "Web Developer", "Full-Stak Developer"],
      tagetId
    );
  } else {
    consoleText(
      ["Ingeniero en Sistemas", "Desarrolador Web", "Desarrollador Full-Stak"],
      tagetId
    );
  }
};
languageConsoleText();
