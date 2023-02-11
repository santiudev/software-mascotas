import React from 'react';

import AdopcionesTarjeta from '../../componentes/adopciones/adopcionesTarjeta';

import styles from '../../css/adopciones/adopcionesTarjetaContainer.module.css'

const adopcionesTarjetaContainer = () => {
  return (
    <section styles={styles}>
      <AdopcionesTarjeta nombre='Mascota' descripcion='descripción'/>
      <AdopcionesTarjeta nombre='Mascota' descripcion='descripción'/>
      <AdopcionesTarjeta nombre='Mascota' descripcion='descripción'/>
      <AdopcionesTarjeta nombre='Mascota' descripcion='descripción'/>
    </section>
    
  )
}

export default adopcionesTarjetaContainer