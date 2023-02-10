import React from 'react';

import AdopcionesTarjetaContainer from '../componentes/adopciones/adopcionesTarjetaContainer';
import BtnPrincipal from '../componentes/principales/btnPrincipal';
import LetraTitulo from '../componentes/principales/LetraTitulo';

import styles from '../css/adopciones.module.css'
const adopciones = () => {
  return (
    <div className={styles.adopciones}>
      <LetraTitulo texto="ADOPCIONES" color="#FAFAFA" />
      <AdopcionesTarjetaContainer />
      <BtnPrincipal texto="Ver mas +" />
    </div>
  )
}

export default adopciones