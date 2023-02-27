import React from "react";
import styles from "../css/refugios/refugios.module.css"
import Nav from "../componentes/nav/nav"

import RefugiosPetsContainer from '../contenedores/refugios/RefugiosPetsContainer'
import headerBar from '../iconos/imagenes recursos/refugios_fondo.png'
import Footer from "../componentes/Footer/Footer";

const Refugios = () =>{
  return(
    <>
      <Nav/>
      <img src={headerBar} alt="refugio pets bar" />
      <RefugiosPetsContainer />
      <h2>Nuestros Servicios</h2>
      <Footer />
    </>
  )
}

export default Refugios;