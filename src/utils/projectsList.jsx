import farmAppImg from '../../public/assets/projects/farmapp/desktop/1.png'

import farmappD1 from '../../public/assets/projects/farmapp/desktop/1.png'
import farmappD2 from '../../public/assets/projects/farmapp/desktop/2.png'
import farmappD3 from '../../public/assets/projects/farmapp/desktop/3.png'
import farmappM1 from '../../public/assets/projects/farmapp/mobile/1.png'
import farmappM2 from '../../public/assets/projects/farmapp/mobile/2.png'
import farmappM3 from '../../public/assets/projects/farmapp/mobile/3.png'

import nomappD1 from '../../public/assets/projects/nomapp/desktop/1.png'
import nomappD2 from '../../public/assets/projects/nomapp/desktop/2.png'
import nomappD3 from '../../public/assets/projects/nomapp/desktop/3.png'
import nomappM1 from '../../public/assets/projects/nomapp/mobile/1.png'
import nomappM2 from '../../public/assets/projects/nomapp/mobile/2.png'
import nomappM3 from '../../public/assets/projects/nomapp/mobile/3.png'

import horusD1 from '../../public/assets/projects/horus/desktop/1.png'
import horusD2 from '../../public/assets/projects/horus/desktop/2.png'
import horusD3 from '../../public/assets/projects/horus/desktop/3.png'
import horusM1 from '../../public/assets/projects/horus/mobile/1.png'
import horusM2 from '../../public/assets/projects/horus/mobile/2.png'
import horusM3 from '../../public/assets/projects/horus/mobile/3.png'

import bgremoveD1 from '../../public/assets/projects/bgremove/desktop/1.png'
import bgremoveD2 from '../../public/assets/projects/bgremove/desktop/2.png'
import bgremoveD3 from '../../public/assets/projects/bgremove/desktop/3.png'
import bgremoveM1 from '../../public/assets/projects/bgremove/mobile/1.png'
import bgremoveM2 from '../../public/assets/projects/bgremove/mobile/2.png'
import bgremoveM3 from '../../public/assets/projects/bgremove/mobile/3.png'

import searchgyfD1 from '../../public/assets/projects/searchgyf/desktop/1.png'
import searchgyfD2 from '../../public/assets/projects/searchgyf/desktop/2.png'
import searchgyfM1 from '../../public/assets/projects/searchgyf/mobile/1.png'
import searchgyfM2 from '../../public/assets/projects/searchgyf/mobile/2.png'

import devterD1 from '../../public/assets/projects/devter/desktop/1.png'
import devterD2 from '../../public/assets/projects/devter/desktop/2.png'
import devterD3 from '../../public/assets/projects/devter/desktop/3.png'
import devterM1 from '../../public/assets/projects/devter/mobile/1.png'
import devterM2 from '../../public/assets/projects/devter/mobile/2.png'
import devterM3 from '../../public/assets/projects/devter/mobile/3.png'

import batatabitD1 from '../../public/assets/projects/batatabit/desktop/1.png'
import batatabitD2 from '../../public/assets/projects/batatabit/desktop/2.png'
import batatabitD3 from '../../public/assets/projects/batatabit/desktop/3.png'
import batatabitM1 from '../../public/assets/projects/batatabit/mobile/1.png'
import batatabitM2 from '../../public/assets/projects/batatabit/mobile/2.png'
import batatabitM3 from '../../public/assets/projects/batatabit/mobile/3.png'


export const PROJECTS = [
  {
    id: 1,
    title: "FarmApp",
    description: "farmapp",
    demoLink: "https://farmapp.vercel.app/",
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
    description: "nomapp",
    demoLink: "https://ccardona.pythonanywhere.com/login",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/nomapp",
    imageList: {
      desktop: [nomappD1, nomappD2, nomappD3],
      mobile: [nomappM1, nomappM2, nomappM3],
    },
  },
  {
    id: 3,
    title: "Horus",
    description: "horus",
    demoLink: "https://xtestuser.pythonanywhere.com/",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/horus",
    imageList: {
      desktop: [horusD1, horusD2, horusD3],
      mobile: [horusM1, horusM2, horusM3],
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
    description: "remove",
    demoLink: "https://bg-picremove.vercel.app/",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/bg-picremove",
    imageList: {
      desktop: [bgremoveD1, bgremoveD2, bgremoveD3],
      mobile: [bgremoveM1, bgremoveM2, bgremoveM3],
    },
  },
  {
    id: 6,
    title: "SearchGyf",
    description: "gif",
    demoLink: "https://searchphy.vercel.app/",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/react-searchgyf",
    imageList: {
      desktop: [searchgyfD1, searchgyfD2],
      mobile: [searchgyfM1, searchgyfM2],
    },
  },
  {
    id: 7,
    title: "Devter",
    description: "devter",
    demoLink: "",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/devter",
    imageList: {
      desktop: [devterD1, devterD2, devterD3],
      mobile: [devterM1, devterM2, devterM3],
    },
  },
  {
    id: 8,
    title: "BatataBit Landing Page",
    description: "batata",
    demoLink: "https://devkev53.github.io/CursoMobileFirts.github.io/",
    imageUrl: farmAppImg,
    repoLink: "https://github.com/devkev53/CursoMobileFirts.github.io?tab=readme-ov-file",
    imageList: {
      desktop: [batatabitD1, batatabitD2, batatabitD3],
      mobile: [batatabitM1, batatabitM2, batatabitM3],
    },
  },
];
