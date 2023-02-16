import React from 'react';
import Nav from "../componentes/nav/nav";
import LetraTitulo from '../componentes/principales/LetraTitulo';
import BtnPrincipal from '../componentes/principales/btnPrincipal';
import LetraParrafo from "../componentes/principales/letraParrafo"
import styles from "../css/home/home.module.css"

import AdopcionesTarjetaContainer from '../contenedores/adopciones/adopcionesTarjetaContainer'
import TarjetaDestacadaContainer from '../contenedores/home/TarjetaDestacadaContainer';
import BlogContainer from '../contenedores/home/BlogContainer';


import Footer from '../componentes/Footer/Footer';
import SobreNosotros from '../componentes/home/sobreNosotros';
import imgSobreNosotros from "../iconos/imagenes recursos/img-sobreNosotros.png"

const home = () => {
  return (
    <>
      <header className={styles.header}>
        <Nav />
        <section className={styles.header__section}>
          <LetraTitulo
            texto="Ayuda a reunir a las mascotas con sus familias"
            clase="letra-titulo--white"
          />
          <LetraParrafo
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
              corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
              excepturi saepe fugit eius nulla."
            clase="letra-parrafo--white"
          />
          <div className={styles.header__buttons}>
            <BtnPrincipal
              texto="Reportar"
            />
            <BtnPrincipal
              texto="Adoptar"
            />
          </div>
        </section>
      </header>
      <section className={styles["publicacion-destacada"]}>
        <LetraTitulo texto="PUBLICACION DESTACADA" clase={"letra-titulo--red"} />
        <h3>Cuando reporta una mascota perdida/encontrada, su publicación aparecerá aquí como publicación destacada.</h3>
        <TarjetaDestacadaContainer />
        <div className={styles["publicacion-destacada__buttons"]}>
          <BtnPrincipal texto="Encontrados"/>
          <BtnPrincipal texto="Perdidos"/>
      </div>
      </section>
      <div className={styles.adopciones}>
        <LetraTitulo texto="ADOPCIONES" clase="letra-titulo--red" align='center' />
        <AdopcionesTarjetaContainer />
        <div className={styles.header__buttons}>
          <BtnPrincipal texto="Ver más" />
        </div>
      </div>
      <LetraTitulo
            texto="BLOG"
            clase="letra-titulo--red"
            align='center'
          />
      <BlogContainer />
      <section className={styles["sobre-nosotros"]}>
        <LetraTitulo
          texto="Sobre Nosotros"
          clase="letra-titulo--red"
        />
        <article className={styles["sobre-nosotros__container"]}>
          <SobreNosotros 
            img={imgSobreNosotros}
            titulo="Lorem"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
            corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
            excepturi saepe fugit eius nulla."
          />
          <SobreNosotros 
            img={imgSobreNosotros}
            titulo="Lorem"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
            corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
            excepturi saepe fugit eius nulla."
          />
          <SobreNosotros 
            img={imgSobreNosotros}
            titulo="Lorem"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
            corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
            excepturi saepe fugit eius nulla."
          />
          <SobreNosotros 
            img={imgSobreNosotros}
            titulo="Lorem"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim sit qui, repudiandae aperiam laborum a quisquam in fugiat
            corrupti tenetur reprehenderit, harum, tempora pariatur expedita 
            excepturi saepe fugit eius nulla."
          />
        </article>
      </section>
      <Footer />
    </>
  )
}

export default home