import React from 'react';
import Nav from "../componentes/nav/nav";
import Footer from '../componentes/Footer/Footer';
import styles from "../css/contacto/contacto.module.css"
import LetraTitulo from "../componentes/principales/LetraTitulo"
import LetraParrafo from  "../componentes/principales/letraParrafo"
import BtnPrincipal from '../componentes/principales/btnPrincipal';

const Contacto = () => {
  return (
    <div className={styles["contenedor-principal"]}>
      <Nav />
      <div className={styles.contacto}>
        <div className={styles["contacto__container"]}>
          <LetraTitulo 
            texto="Contactate con nosotros"
            clase="letra-titulo--red"
            align="center"
          />
          <LetraParrafo 
            texto={"Una gran visión sin grandes personas es irrelevante.\nTrabajemos juntos."}
            clase="letra-parrafo--black"
          />
          <div className={styles.contacto__inputs}>
            <input type="text" placeholder="Nombre (*)" className={styles.contacto__input}/>
            <input type="text" placeholder="Apellido (*)" className={styles.contacto__input} />
            <input type="text" placeholder="Email (*)" className={styles.contacto__input} />
            <input type="text" placeholder="Teléfono (*)" className={styles.contacto__input} />
            <textarea type="text" placeholder="Mensaje (*)" className={styles.contacto__textarea} maxLength="300" />
          </div>
          <p className={styles.contacto__parrafo}>Hasta 300 caracteres</p>
          <BtnPrincipal
            texto="Enviar"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacto;