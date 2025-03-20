import farmAppImg from '../assets/farmApp.png'
const assetsUrl ='../../assets/projects/'
import farmappD1 from '../assets/projects/farmapp/desktop/1.png'
import farmappD2 from '../assets/projects/farmapp/desktop/2.png'
import farmappD3 from '../assets/projects/farmapp/desktop/3.png'
import farmappM1 from '../assets/projects/farmapp/mobile/1.png'
import farmappM2 from '../assets/projects/farmapp/mobile/2.png'
import farmappM3 from '../assets/projects/farmapp/mobile/3.png'

export const PROJECTS = [
  {
    id: 1,
    title: "FarmApp",
    description: "Esta es una aplicación web, creada para la automatización y control de riego en cultivos, la cual se encarga de abrir el paso del agua por medio de electroválvulas enviando la orden al módulo WiFi + Bluethooth SP32, este se puede realizar manual o automatizar, de igual manera cuenta con impresión de reportes.",
    demoLink: "https://farmapp-devkev53.vercel.app/login",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/farmapp",
    imageList: {
      desktop: [farmappD1, farmappD2, farmappD3],
      mobile: [farmappM1, farmappM2, farmappM3],
    },
  },
  {
    id: 2,
    title: "NomApp",
    description: "Aplicación web para la administración de empresas y empleados, cuenta con una tienda interna de la cual se puede vender a los usuarios y se descuenta las cuotas o pagos de la nómina de los empleados, impresión de boleta de nóminas y bonos.",
    demoLink: "https://ccardona.pythonanywhere.com/login",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/nomapp",
    imageList: {
      desktop:[],
      mobile:[]
    },
  },
  {
    id: 3,
    title: "Horus",
    description: "Aplicación web creada para la administración de un taller mecánico, el cual cuenta con módulo de ventas, clientes, productos, proveedores compras y empleados, así como la impresión de boletas de compra.",
    demoLink: "https://xtestuser.pythonanywhere.com/",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/horus",
    imageList: {
      desktop:[],
      mobile:[]
    },
  },
  // {
  //   id: 4,
  //   title: "SICAME",
  //   description: "Esta es una aplicacion web, creada para la automatización y control de riego en cultivos, la cual se encarga de abrir el paso del agua por medio de elctrovalvulas enviando la orden al modulo wi-fi+bluethooth SP32, este se puede realizar manual o automatizar.",
  //   demoLink: "",
  //   imageUrl: farmAppImg,
  //   repoLink: "",
  //   imageList: {
  //     desktop:[],
  //     mobile:[]
  //   },
  // },
  {
    id: 5,
    title: "BGRemove",
    description: "Es una aplicación creada para participar en la Hackathon realizada por Midudev, desarrollador español con gran trayectoria, comparte conocimientos en su canal en Twitch con más de 178K en seguidores, para esta se utilizó tecnología de Cloudinary, y su función es poder remover el fondo de las imágenes subidas al servicio de Cloudinary.",
    demoLink: "https://bg-picremove.vercel.app/",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/bg-picremove",
    imageList: {
      desktop:[],
      mobile:[]
    },
  },
  {
    id: 6,
    title: "SearchGyf",
    description: "Aplicación web que se realizó como proyecto propuesto por el español Midudev, para conocer el funcionamiento y aprendizaje de ReactJs, consumiendo al API gratuita proporcionada por GIPHY, se aplicó el scroll infinito implementando un observar para no cargar y saturar la página, intentando realizar un tipo de Lazy Loading, usando Hooks personalizados y contexto para el manejo del tema de la aplicación.",
    demoLink: "https://searchphy.vercel.app/",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/react-searchgyf",
    imageList: {
      desktop:[],
      mobile:[]
    },
  },
  {
    id: 7,
    title: "Devter",
    description: "Esta es una aplicacion web, creada para la automatización y control de riego en cultivos, la cual se encarga de abrir el paso del agua por medio de elctrovalvulas enviando la orden al modulo wi-fi+bluethooth SP32, este se puede realizar manual o automatizar.",
    demoLink: "",
    imageUrl: farmAppImg,
    repoLink: "",
    imageList: {
      desktop:[],
      mobile:[]
    },
  },
  {
    id: 8,
    title: "BatataBit Landing Page",
    description: "Esta es una aplicacion web, creada para la automatización y control de riego en cultivos, la cual se encarga de abrir el paso del agua por medio de elctrovalvulas enviando la orden al modulo wi-fi+bluethooth SP32, este se puede realizar manual o automatizar.",
    demoLink: "https://devkev53.github.io/CursoMobileFirts.github.io/",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/CursoMobileFirts.github.io?tab=readme-ov-file",
    imageList: {
      desktop:[],
      mobile:[]
    },
  },
];
