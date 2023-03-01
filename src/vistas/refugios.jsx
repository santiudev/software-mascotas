import React from "react";
import styles from "../css/refugios/refugios.module.css"
import Nav from "../componentes/nav/nav"

import RefugiosPetsContainer from '../contenedores/refugios/RefugiosPetsContainer'
import headerBar from '../iconos/imagenes recursos/refugios_fondo.png'
import Footer from "../componentes/Footer/Footer";
import imgFundacion from "../iconos/img-refugios/fundacion.jpg"
import Lista from "../componentes/principales/Lista"

const listaServicios = [
  "Lorem ipsum dolor sit",
  "Amet consectetur adipisicing elit.",
  "Repellendus architecto, explicabo"
]

const Refugios = () =>{
  return(
    <>
      <Nav/>
      <img src={headerBar} alt="refugio pets bar" />
      <RefugiosPetsContainer />
      <section className={styles.servicios}>
        <h2 className={styles.servicios__titulo}>Nuestros Servicios</h2>
        <article className={styles.servicios__container}>
          <section className={styles.servicios__section}>
            <h3 className={styles.servicios__subtitulo}>Lo mejor para tu mascota</h3>
            <p className={styles.servicios__parrafo}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Optio molestiae sint quod ipsum aliquam nesciunt. 
              Repellendus architecto, explicabo, molestiae iste nobis repellat
              sunt voluptates sapiente voluptas cupiditate cum placeat nostrum.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Optio molestiae sint quod ipsum aliquam nesciunt. 
              Repellendus architecto, explicabo, molestiae iste nobis repellat
              sunt voluptates sapiente voluptas cupiditate cum placeat nostrum.
            </p>
            <h3 className={styles.servicios__subtitulo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            {
              listaServicios.map((listaTexto, indice) => 
                <Lista texto={listaTexto} key={indice} />
              )
            }
          </section>
          <figure className={styles.servicios__img}>
            <img src={imgFundacion} alt="Fundación" />
          </figure>
        </article>
      </section>
      <Footer />
    </>
  )
}

export default Refugios;