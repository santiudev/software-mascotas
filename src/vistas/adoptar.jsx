import React from 'react';
import Nav from "../componentes/nav/nav";

import BtnPrincipal from '../componentes/principales/btnPrincipal';
import LetraTitulo from '../componentes/principales/LetraTitulo';

//En el componente letraTitulo se le agrego la prop align para dinamizar el text-align del componente
import styles from '../css/adopciones/adopciones.module.css'
const adopciones = () => {
  return (
    <>
      <Nav />
      <div className={styles.adopciones}>
        <LetraTitulo texto="ADOPCIONES" clase="letra-titulo--red" align='center' />
        <div>
          <BtnPrincipal texto="Ver más" />
        </div>
      </div>
    </>
  )
}

export default adopciones