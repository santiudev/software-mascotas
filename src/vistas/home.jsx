import React from 'react';
import Nav from "../componentes/nav/nav";
import LetraTitulo from '../componentes/principales/LetraTitulo';
import BtnPrincipal from '../componentes/principales/btnPrincipal';
import LetraParrafo from "../componentes/principales/letraParrafo"
import styles from "../css/home/home.module.css"

import AdopcionesTarjetaContainer from '../contenedores/adopciones/adopcionesTarjetaContainer'
import TarjetaDestacadaContainer from '../contenedores/home/TarjetaDestacadaContainer';
import Footer from '../componentes/Footer/Footer';
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
      <TarjetaDestacadaContainer />
      <div className={styles.adopciones}>
        <LetraTitulo texto="ADOPCIONES" clase="letra-titulo--red" align='center' />
        <AdopcionesTarjetaContainer />
        <div>
          <BtnPrincipal texto="Ver más" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default home