/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

// style import
import styles from "../../css/home/tarjetaDestacada.module.css";

import instagram from "../../iconos/instagram.png"
import twitter from "../../iconos/twitter-sign.png"
import facebook from "../../iconos/facebook.png"

// asset import
import arrow from '../../iconos/arrow-down-sign-to-navigate.png'

//tarjeta destacada recibe como prop la imagen de la mascota. Se require algún contenedor de tarjetas para eso
const tarjetaDestacada = ({ image, length, date, place ,contact, description }) => {
  const [stateHover, setStateHover] = useState(false)
  const handleStateHover = () => {
    setStateHover(!stateHover)
  }
  return(
    <>
      <article className={styles.card} onMouseOver={handleStateHover}>
        <img src={image} alt="mascota" />
        { stateHover && (
          <section className={styles.cardExtended}>
            <h3>Se perdió</h3>
            <ul>
              <li>Tamaño: {length}</li>
              <li>Zona: {place}</li>
              <li>Fecha: {date}</li>
              <li>Contacto: {contact}</li>
              <li>Descripción: {description}</li>
            </ul>
            <address>
    
            </address>
          </section>
        )}
        <button className={styles.cardButton}>
          <img src={arrow} alt="arrow" />
        </button>
      </article>
    </>
	);
};

export default tarjetaDestacada;