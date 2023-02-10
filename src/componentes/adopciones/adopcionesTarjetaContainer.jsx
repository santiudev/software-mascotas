import React from 'react';

import AdopcionesTarjeta from './adopcionesTarjeta';

import styles from '../../css/adopciones/adopcionesTarjetaContainer.module.css'

const adopcionesTarjetaContainer = () => {
  return (
    <section styles={styles}>
      <AdopcionesTarjeta />
      <AdopcionesTarjeta />
      <AdopcionesTarjeta />
      <AdopcionesTarjeta />
    </section>
    
  )
}

export default adopcionesTarjetaContainer