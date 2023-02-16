import React from 'react';
import styles from '../../css/adopciones/adopcionesTarjeta.module.css'

export default function AdopcionesTarjeta ({ imagen, descripcion, contacto }) {
  return (
		<article className={styles.tarjeta}>
			<div className={styles.tarjeta__container}>
				<img src={imagen} alt="Mascota en adopción" />
			</div>
			<p>{descripcion}</p>
			<p>
				<b>{contacto}</b>
			</p>
		</article>
	);
}