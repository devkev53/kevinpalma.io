const SunIcon = `
  <svg style="padding: 6px; border-radius:100%; background: rgba(255,255,255,.9); color: orange;" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="currentColor"/>
  </svg>
`;
const MoonIcon = `
  <svg style="padding: 6px; border-radius:100%; background: #222; color: rgb(190, 190, 83);" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill="currentColor"/>
  </svg>
`;

// Taken a theme button
const themeBtn = document.querySelector(".theme");

// Taken a preferes color theme for system
const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Taken a preferes color theme for localStorage
const getLocalTheme = () => {
  return window.localStorage.getItem("theme") || getSystemTheme();
};

// Draw change Icon in theme button
const drawIcon = () => {
  const localTheme = getLocalTheme();
  if (localTheme === "dark") {
    themeBtn.innerHTML = SunIcon;
    themeBtn.classList.add("dark");
    themeBtn.classList.remove("light");
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.add("dark");
    document.querySelector(".logoContainerHero").classList.remove("light");
  } else {
    themeBtn.innerHTML = MoonIcon;
    themeBtn.firstElementChild.style.animation = "inAnimation 1s";
    document.querySelector("html").classList.add("light");
    document.querySelector(".logoContainerHero").classList.add("light");
    document.querySelector("html").classList.remove("dark");
    themeBtn.classList.remove("dark");
    themeBtn.classList.add("light");
    document.querySelector(".logoContainer").classList.add("light");
    document.querySelector(".logoContainer").classList.remove("dark");
  }
};

const outAnimation = () => {
  themeBtn.firstElementChild.style.transition = "1s all ease";
  themeBtn.firstElementChild.style.transform = "scale(0) rotate(360deg)";
};

export const themeController = () => {
  drawIcon();

  themeBtn.addEventListener("click", () => {
    const localTheme = getLocalTheme();
    outAnimation();
    setTimeout(() => {
      if (localTheme === "dark") {
        window.localStorage.setItem("theme", "light");
        drawIcon();
        themeBtn.firstElementChild.style.animation = "inAnimation 1s";
        console.log(document.querySelector(".logoContainerHero"));
        document.querySelector(".logoContainerHero").classList.add("light");
      } else {
        window.localStorage.setItem("theme", "dark");
        drawIcon();
        document.querySelector(".logoContainerHero").classList.remove("light");
        themeBtn.firstElementChild.style.animation = "inAnimation 1s";
      }
    }, 500);
  });
};
