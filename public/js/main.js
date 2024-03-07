let isDebug = true;

const checkModalState = () => {
  if (isDebug) {
    return window.localStorage.getItem("closeModal") ?? false;
  }
};

// -*-*-*-*-*-*-*- PROJECTS DATA -*-*-*-*-*-*-*-

const baseImgUrl = "/public/assets/imgs/projects/";
export const workProjects = [
  {
    name: "horus",
    description:
      "Aplicacion web para el control taller mecanico, venta de productos y servicios, control de clientes y usuarios.",
    imgBaseUrl: `${baseImgUrl}horus/`,
    tecnologies: [],
    site: "https://xtestuser.pythonanywhere.com/",
    repository: "https://github.com/devkev53/horus",
  },
  {
    name: "nomapp",
    description:
      "Aplicacion web para el control de empresas y empledos, control de pagos y nomina, tienda interna.",
    imgBaseUrl: `${baseImgUrl}nomapp/`,
    tecnologies: [],
    site: "https://ccardona.pythonanywhere.com/",
    repository: "https://github.com/devkev53/nomapp",
  },
  {
    name: "farmapp",
    description:
      "Aplicacion web para el control sistema de riego, activacion y control del hardare para el cultuvo.",
    imgBaseUrl: `${baseImgUrl}farmapp/`,
    tecnologies: [],
    site: "https://farmapp-devkev53.vercel.app/",
    repository: "https://github.com/devkev53/PGII-CR",
  },
  {
    name: "sicame",
    description:
      "Aplicacion web para el cotnrol de bodega, ingreso/egreso de material, para institucion eductiva.",
    imgBaseUrl: `${baseImgUrl}sicame/`,
    tecnologies: [],
    site: "https://farmapp-devkev53.vercel.app/",
    repository: "https://github.com/devkev53/SICAME",
  },
];

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

// -*-*-*-*-*-*-*- DOWNLOAD CV BUTTON  -*-*-*-*-*-*-*-

const btnCv = document.querySelector(".downloadCVBtn");

btnCv.addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1EiEgpNA3_btHuPjqt6d_84zrRLjxYCWj/view?usp=sharing",
    "_blank"
  );
});

// -*-*-*-*-*-*-*- FUNCION DRAW WORKS PROJECTS -*-*-*-*-*-*-*-
const containerProjects = document.querySelector("#workProjectsContainer");

let projectsHtml = "";
workProjects.forEach((project) => {
  projectsHtml += `
    <article class="portfolio_item">
      <picture class="portfolio_img_container">
        <source media="(min-width: 767px)" srcset="${project.imgBaseUrl}desktop/2.png">
        <img src="${project.imgBaseUrl}mobile/2.png" alt="">
        <div class="project_title_wrapper">
          <h3 class="project_title title">${project.name}</h3>
        </div>
        <div class="tecnologies_wrapper">
          <ul class="tecnologies">
            <li>
              <a class="js_icon" href="">
              </a>
            </li>
            <li>
              <a class="react_icon" href="">
              </a>
            </li>
            <li>
              <a class="python_icon" href="">
              </a>
            </li>
            <li>
              <a class="django_icon" href="">
              </a>
            </li>
          </ul>
        </div>
      </picture>
      <div class="description">
        <h3 class="title">${project.name}</h3>
        <p>
          ${project.description}
        </p>
      </div>
      <div class="project_links">
        <a target="_blank" href="${project.name}">
          <span>Leer más...</span>
        </a>
        <a class="github_icon" target="_blank" href="${project.repository}">
        </a>
        <a class="site_icon" target="_blank" href="${project.site}"></a>
      </div>
    </article>
  `;
});

const drawProjects = () => {
  containerProjects.innerHTML = projectsHtml;
};

drawProjects();

// -*-*-*-*-*-*-*- FUNCION DRAW ICONS PROJECTS -*-*-*-*-*-*-*-

const drawIcons = () => {
  document.querySelectorAll(".js_icon").forEach(
    (item) =>
      (item.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512">
        <rect width="512" height="512" rx="15%" fill="#f7df1e"/>
        <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"/>
      </svg>
    `)
  );

  document.querySelectorAll(".react_icon").forEach(
    (item) =>
      (item.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none">
        <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill='#53C1DE'/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill='#53C1DE'/>
      </svg>
    `)
  );

  document.querySelectorAll(".python_icon").forEach(
    (item) =>
      (item.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
        <defs>
        <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
        <stop stop-color="#327EBD"/>
        <stop offset="1" stop-color="#1565A7"/>
        </linearGradient>
        <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFDA4B"/>
        <stop offset="1" stop-color="#F9C600"/>
        </linearGradient>
        </defs>
      </svg>
      `)
  );

  document.querySelectorAll(".django_icon").forEach(
    (item) =>
      (item.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
        <g>
          <rect fill="#092E20" x="0" y="0" width="256" height="256" rx="28"></rect>
          <path d="M186.377012,94.197636 L186.377012,160.424478 C186.377012,183.243286 184.707519,194.187745 179.699037,203.649406 C175.060358,212.741266 168.937684,218.490548 156.323731,224.798721 L129.794937,212.183571 C142.410087,206.247593 148.531564,201.05481 152.427049,193.074749 C156.509231,184.91278 157.808923,175.451119 157.808923,150.593015 L157.808923,94.197636 L186.377012,94.197636 Z M140.928486,50.0787207 L140.928486,182.316986 C126.272844,185.099476 115.512688,186.212472 103.826231,186.212472 C68.9487718,186.212472 50.7686431,170.445031 50.7686431,140.205054 C50.7686431,111.079269 70.0629644,92.1583404 99.9295492,92.1583404 C104.567032,92.1583404 108.091519,92.5281423 112.359199,93.6411381 L112.359199,50.0787207 L140.928486,50.0787207 Z M102.713236,115.160254 C88.243093,115.160254 79.8944275,124.065418 79.8944275,139.647359 C79.8944275,154.860696 87.8720944,163.208164 102.527736,163.208164 C105.680028,163.208164 108.278215,163.022665 112.359199,162.467364 L112.359199,116.643052 C109.020212,115.531253 106.237722,115.160254 102.713236,115.160254 Z M186.377012,50.2307105 L186.377012,79.5419941 L157.808923,79.5419941 L157.808923,50.2307105 L186.377012,50.2307105 Z" fill="#FFFFFD"></path>
        </g>
      </svg>
      `)
  );

  // -*-*-*-*-*-*-*-*- LINKS PROJECTS ICONS -*-*-*-*-*-*-*-*-

  document.querySelectorAll(".github_icon").forEach(
    (item) =>
      (item.innerHTML = `
      <span class='tooltip'>Repository</span>
      <svg fill="currentColor" width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"/></svg>
    `)
  );

  document.querySelectorAll(".site_icon").forEach(
    (item) =>
      (item.innerHTML = `
      <span class='tooltip'>Site</span>
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.982 19.61c.454-.7.909-1.6 1.236-2.755.755.29 1.273.636 1.591.909a8.182 8.182 0 0 1-2.864 1.845h.037v.001zm-8.8-1.855c.336-.273.845-.61 1.6-.91.336 1.164.773 2.064 1.236 2.764A8.2 8.2 0 0 1 6.2 17.755h-.018zm10.636-6.664c-.028-.81-.11-1.619-.245-2.418 1-.364 1.727-.8 2.236-1.2a8.136 8.136 0 0 1 1.282 3.618h-3.273zm-8.973-4.2a5.936 5.936 0 0 1-1.481-.8 8.2 8.2 0 0 1 2.654-1.7c-.427.636-.845 1.454-1.182 2.5h.01-.001zm7.137-2.5a8.145 8.145 0 0 1 2.654 1.7 6.01 6.01 0 0 1-1.481.8 9.58 9.58 0 0 0-1.182-2.5h.009zM14.8 9.118c.09.6.182 1.246.2 1.973H9c.027-.727.09-1.382.182-1.973 1.855.334 3.754.334 5.609 0h.009zM12 7.545c-.91 0-1.71-.072-2.39-.181.726-2.237 1.854-3.137 2.39-3.455.518.318 1.655 1.227 2.382 3.455A15.04 15.04 0 0 1 12 7.545zm-6.818-.072a8.03 8.03 0 0 0 2.245 1.2 18.368 18.368 0 0 0-.245 2.418h-3.31a8.13 8.13 0 0 1 1.319-3.618h-.01.001zm-1.3 5.436h3.3c.036.782.09 1.5.2 2.155a7.682 7.682 0 0 0-2.31 1.272 8.11 8.11 0 0 1-1.2-3.427h.01zM12 14.364c-1.09 0-2.027.09-2.845.236A16.91 16.91 0 0 1 9 12.91h6c-.027.608-.073 1.18-.145 1.69A15.388 15.388 0 0 0 12 14.355v.009zm0 5.727c-.545-.327-1.745-1.3-2.473-3.727A14.095 14.095 0 0 1 12 16.182c.955 0 1.773.063 2.482.182-.727 2.454-1.927 3.4-2.473 3.727H12zm6.927-3.764a7.634 7.634 0 0 0-2.309-1.272 17.95 17.95 0 0 0 .2-2.146h3.31a8.11 8.11 0 0 1-1.2 3.418h-.001zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="currentColor"/></svg>
    `)
  );
};

drawIcons();
