import React from "react";

// style import
import styles from "../../css/home/tarjetaDestacada.module.css";

// asset import
import arrow from '../../iconos/arrow-down-sign-to-navigate.png'

//tarjeta destacada recibe como prop la imagen de la mascota. Se require algún contenedor de tarjetas para eso
const tarjetaDestacada = ({ image }) => {
	return(
    <article className={styles.card}>
      <img src={image} alt="mascota" />
      <button className={styles.cardButton}>
        <img src={arrow} alt="arrow" />
      </button>
    </article>
	);
};

export default tarjetaDestacada;