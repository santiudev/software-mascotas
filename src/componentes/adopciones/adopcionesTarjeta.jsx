import React from 'react';

import styles from '../../css/adopciones/adopcionesTarjeta.module.css'
import BtnPrincipal from '../principales/btnPrincipal';

const adopcionesTarjeta = () => {
  return (
    <article styles={styles.tarjeta}>
      <img alt="mascota en adopción" />
      <h3>Nombre de mascota</h3>
      <p>Descripción</p>
      <BtnPrincipal texto="Leer mas +"/>
    </article>
  )
}

export default adopcionesTarjeta