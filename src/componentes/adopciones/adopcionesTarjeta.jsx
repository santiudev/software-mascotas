import React from 'react';

import styles from '../../css/adopciones/adopcionesTarjeta.module.css'
import BtnPrincipal from '../principales/btnPrincipal';

const adopcionesTarjeta = ({ imagen, nombre, descripcion }) => {
  return (
    <article className={styles.tarjeta}>
      <img src={imagen} alt="Mascota en adopción" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <div>
        <BtnPrincipal texto="Leer más"/>
      </div>
    </article>
  )
}

export default adopcionesTarjeta