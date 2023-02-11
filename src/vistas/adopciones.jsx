import React from 'react';

import AdopcionesTarjetaContainer from '../contenedores/adopciones/adopcionesTarjetaContainer';
import BtnPrincipal from '../componentes/principales/btnPrincipal';
import LetraTitulo from '../componentes/principales/LetraTitulo';

import styles from '../css/adopciones/adopciones.module.css'
const adopciones = () => {
  return (
    <div className={styles.adopciones}>
      <LetraTitulo texto="ADOPCIONES" color="#DE341D" align='center' />
      <AdopcionesTarjetaContainer />
      <div>
        <BtnPrincipal texto="Ver mas +" />
      </div>
    </div>
  )
}

export default adopciones