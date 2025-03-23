import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  resources: {
    es: {
      translation: {
        home: "Home",
        about: "Sobre mí",
        skills: "Habilidades",
        training: "Formación",
        projects: "Proyectos",
        homeGreeting: "Hola! Soy",
        homeDescription:
          "Me considero una persona proactiva apasionada por la tecnología lo cual me ha llevado a realizar aprendizaje continuo, logrando obtener habilidades para la creación de soluciones a problemas por medio de la tecnología, así mismo me considero de mentalidad abierta y adaptable, listo para asumir nuevos retos y poder expandir las habilidades.",
        downloadCv: "Descargar CV",
        aboutMeP1:
          "Cuento con un grado academico de Magister Artium en Seguridad Informatica, asi como una Ingenieria en Sistemas de Informacion y Ciencias de la Computación, sin embargo desde que realizaba mi preparacion en la carrera me ha apasionado la programacion, y no he parado e aprender y conocer nuevas tecnologias.",
        aboutMeP2:
          "Actualmente, me desempeño en el área de soporte técnico brindando soporte a personal en la institución en la que laboro; sin embargo, paralelo a este desarrollo proyectos personales de programación, así mismo he desarrollado proyectos pequeños para terceras personas, en los cuales he aplicado los conocimientos que he logrado adquirir a lo largo de mi formación.",
        aboutMeP3:
          "En lo personal, considero que una persona exitosa no solo debe contener habilidades técnicas, sino que estas se deben acompañar de habilidades blandas. En lo personal, creo que cuento con comunicación clara, trabajo en equipo, adaptación al cambio y resolución de problemas.",
        formationLearMore: "Conocer Más",
        excel: "Preparación a la Certificación de Microsoft Excel 2019",
        powerBi: "Análisis de datos con Excel y Power BI (e-learning)",
        ma: "Magíster Artíum en Seguridad Informática",
        ing: "Ingeniero en Sistemas de Información y Ciencias de la Computación",
        platzi: "Ruta de Desarrollo Web",
        farmapp:
          "Esta es una aplicación web, creada para la automatización y control de riego en cultivos, la cual se encarga de abrir el paso del agua por medio de electroválvulas enviando la orden al módulo WiFi + Bluethooth SP32, este se puede realizar manual o automatizar, de igual manera cuenta con impresión de reportes.",
        nomapp:
          "Aplicación web para la administración de empresas y empleados, cuenta con una tienda interna de la cual se puede vender a los usuarios y se descuenta las cuotas o pagos de la nómina de los empleados, impresión de boleta de nóminas y bonos.",
        horus:
          "Aplicación web creada para la administración de un taller mecánico, el cual cuenta con módulo de ventas, clientes, productos, proveedores compras y empleados, así como la impresión de boletas de compra.",
        remove:
          "Es una aplicación creada para participar en la Hackathon realizada por Midudev, desarrollador español con gran trayectoria, comparte conocimientos en su canal en Twitch con más de 178K en seguidores, para esta se utilizó tecnología de Cloudinary, y su función es poder remover el fondo de las imágenes subidas al servicio de Cloudinary.",
        gif: "Aplicación web que se realizó como proyecto propuesto por el español Midudev, para conocer el funcionamiento y aprendizaje de ReactJs, consumiendo al API gratuita proporcionada por GIPHY, se aplicó el scroll infinito implementando un observar para no cargar y saturar la página, intentando realizar un tipo de Lazy Loading, usando Hooks personalizados y contexto para el manejo del tema de la aplicación.",
        devter:
          "Esta aplicación web se realizó como un proyecto de practica para conocer NEXTJS, en un curso gratuito de Midudev, utilizando como base de datos SUPABASE, así como su integración de inicio de sesión con Github, el enfoque principal es realizar una aplicación tipo X en donde se pueda devitear con otros desarrolladores.",
        btata:
          "Batatabit es una landinpage desarrollada en un curso de Platzi en la cual se implementaba el desarrollo mobile first, siendo el tema principal conocer las bondades de este tipo de desarrollo lo cual evita que se termine rompiendo todo al abrir las aplicaciones en distintos tamaños de pantallas.",
        footer1: "Creado en",
        footer2: "con",
        footer3: "por",
      },
    },
    en: {
      translation: {
        home: "Home",
        about: "About me",
        skills: "Skills",
        training: "Training",
        projects: "Projects",
        homeGreeting: "Hello! Am",
        homeDescription:
          "I consider myself a proactive person with a passion for technology, which has led me to pursue continuous learning, gaining skills to create solutions to problems through technology. I also consider myself open-minded and adaptable, ready to take on new challenges and expand my skills.",
        downloadCv: "Download CV",
        aboutMeP1:
          "I consider myself a proactive person with a passion for technology, which has led me to pursue continuous learning, gaining skills to create solutions to problems through technology. I also consider myself open-minded and adaptable, ready to take on new challenges and expand my skills.",
        aboutMeP2:
          "Currently, I work in the technical support area, providing support to staff at the institution where I work. However, in parallel with this, I develop personal programming projects, and I also develop small projects for third parties, applying the knowledge I acquired throughout my training.",
        aboutMeP3:
          "Personally, I believe that a successful person must possess not only technical skills, but also soft skills. Personally, I believe I have clear communication, teamwork, adaptability to change, and problem-solving.",
        formationLearMore: "Learn More",
        excel: "Preparation for Microsoft Excel 2019 Certification",
        powerBi: "Data analysis with Excel and Power BI (e-learning)",
        ma: "Master's Degree in Computer Security",
        ing: "Information Systems and Computer Science Engineer",
        platzi: "Web Development Path",
        farmapp:
          "This is a web application, created for the automation and control of irrigation in crops, which is responsible for opening the passage of water through solenoid valves by sending the order to the WiFi + Bluetooth SP32 module. This can be done manually or automatically, and it also has report printing.",
        nomapp:
          "Web application for managing companies and employees. It features an internal store from which users can sell and deduct fees or payments from employee payrolls, printing payroll slips, and bonuses.",
        horus:
          "A web application created for the management of a mechanical workshop, which includes a module for sales, customers, products, suppliers, purchases, and employees, as well as the printing of purchase receipts.",
        remove:
          "It is an application created to participate in the Hackathon held by Midudev, a Spanish developer with extensive experience, who shares his knowledge on his Twitch channel with more than 178K followers. Cloudinary technology was used for this application, and its function is to be able to remove the background from images uploaded to the Cloudinary service.",
        gif: "Web application that was carried out as a project proposed by the Spanish Midudev, to understand the operation and learning of ReactJs, consuming the free API provided by GIPHY, infinite scroll was applied by implementing an observer to avoid loading and saturating the page, trying to perform a type of Lazy Loading, using custom Hooks and context to manage the application's theme.",
        devter:
          "This web application was created as a practice project to learn NEXTJS, in a free Midudev course, using SUPABASE as a database, as well as its login integration with Github, the main focus is to create an X-type application where you can discuss with other developers.",
        batata:
          "Batatabit is a landing page developed in a Platzi course that implemented mobile-first development. The main focus is on understanding the benefits of this type of development, which prevents everything from breaking when opening apps on different screen sizes.",
        footer1: "Buildin in",
        footer2: "with",
        footer3: "by",
      },
    },
  },
});

export default i18n;
