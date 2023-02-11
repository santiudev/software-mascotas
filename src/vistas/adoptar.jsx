import React from 'react';
import Nav from "../componentes/nav/nav";

import AdopcionesTarjetaContainer from '../contenedores/adopciones/adopcionesTarjetaContainer';
import BtnPrincipal from '../componentes/principales/btnPrincipal';
import LetraTitulo from '../componentes/principales/LetraTitulo';

//En el componente letraTitulo se le agrego la prop align para dinamizar el text-align del componente
import styles from '../css/adopciones/adopciones.module.css'
const adopciones = () => {
  return (
    <>
      <Nav />
      <div className={styles.adopciones}>
        <LetraTitulo texto="ADOPCIONES" color="#DE341D" align='center' />
        <AdopcionesTarjetaContainer />
        <div>
          <BtnPrincipal texto="Ver mas +" />
        </div>
      </div>
    </>
  )
}

export default adopciones