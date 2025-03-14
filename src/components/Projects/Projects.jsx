import React from 'react'
import styles from './projects.module.css'
import farmApp from '../../assets/farmApp.png'
import example from '../../assets/example.png'

export const Projects = () => {
  return (
    <section id='Projects' className={styles.projectsWrapper}>
      <h1 className={styles.titleSection}>Proyectos</h1>

      <div className={styles.cardsContainer}>

        {/* FARMAPP */}
        <div className={styles.projectCardWrapper}>
          <picture>
            <img src={farmApp} alt="Screen App" />
          </picture>
          <div className={styles.projectInfo}>
            <h3>FarmApp</h3>
            <p>Esta es una aplicación web, creada para la automatización y control de riego en cultivos, la cual se encarga de abrir el paso del agua por medio de electroválvulas enviando la orden al módulo WiFi + Bluethooth SP32, este se puede realizar manual o automatizar, de igual manera cuenta con impresión de reportes.</p>
          </div>
          <div className={styles.technologies}></div>
          <div className={styles.projectFooter}>
            <button className="btn secondaryBtn">
              <span>Demo</span>
            </button>
            <button className="btn primaryBtn">
              <span>Repo</span>
            </button>
          </div>
        </div>

        {/* NOMAPP */}
        <div className={styles.projectCardWrapper}>
          <picture>
            <img src={example} alt="Screen App" />
          </picture>
          <div className={styles.projectInfo}>
            <h3>NomApp</h3>
            <p>Aplicación web para la administración de empresas y empleados, cuenta con una tienda interna de la cual se puede vender a los usuarios y se descuenta las cuotas o pagos de la nómina de los empleados, impresión de boleta de nóminas y bonos.</p>
          </div>
          <div className={styles.technologies}></div>
          <div className={styles.projectFooter}>
            <button className="btn secondaryBtn">
              <span>Demo</span>
            </button>
            <button className="btn primaryBtn">
              <span>Repo</span>
            </button>
          </div>
        </div>

        {/* Horus */}
        <div className={styles.projectCardWrapper}>
          <picture>
            <img src={farmApp} alt="Screen App" />
          </picture>
          <div className={styles.projectInfo}>
            <h3>Horus</h3>
            <p>Aplicación web creada para la administración de un taller mecánico, el cual cuenta con módulo de ventas, clientes, productos, proveedores compras y empleados, así como la impresión de boletas de compra.</p>
          </div>
          <div className={styles.technologies}></div>
          <div className={styles.projectFooter}>
            <button className="btn secondaryBtn">
              <span>Demo</span>
            </button>
            <button className="btn primaryBtn">
              <span>Repo</span>
            </button>
          </div>
        </div>

        {/* SICAME */}
        <div className={styles.projectCardWrapper}>
          <picture>
            <img src={farmApp} alt="Screen App" />
          </picture>
          <div className={styles.projectInfo}>
            <h3>FarmApp</h3>
            <p>Esta es una aplicacion web, creada para la automatización y control de riego en cultivos, la cual se encarga de abrir el paso del agua por medio de elctrovalvulas enviando la orden al modulo wi-fi+bluethooth SP32, este se puede realizar manual o automatizar.</p>
          </div>
          <div className={styles.technologies}></div>
          <div className={styles.projectFooter}>
            <button className="btn secondaryBtn">
              <span>Demo</span>
            </button>
            <button className="btn primaryBtn">
              <span>Repo</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
