import SubData from "./subData";
import shareIcon from '../../iconos/share-icon.png';
import styles from '../../css/Perdidos/perdidosTarjeta.module.css';

export default function PerdidosTarjeta({ url_img, nombre, tam, zona, fecha, contacto, desc, encontrado }) {
  return (
		<div className={styles.perdidosTarjeta}>
			<img
				className={styles.perdidosTarjeta__img}
				src={url_img}
				alt={`${nombre}-img`}
			/>
			<h3 className={styles.perdidosTarjeta__h3}>{ encontrado ? 'Encontrado' : `Se perdió "${nombre}"` }</h3>
			<div className={styles.perdidosTarjeta__subdata_container}>
        <SubData className={styles.perdidosTarjeta__subdata} subtitle="Tamaño" data={tam} />
        <SubData className={styles.perdidosTarjeta__subdata} subtitle="Zona" data={zona} />
        <SubData className={styles.perdidosTarjeta__subdata} subtitle="Fecha" data={fecha} />
        <SubData className={styles.perdidosTarjeta__subdata} subtitle="Contacto" data={contacto} />
        <SubData className={styles.perdidosTarjeta__subdata} subtitle="Descripción" data={desc} />
      </div>
			<img
				className={styles.perdidosTarjeta__img}
				src={shareIcon}
				alt="share-icon"
			/>
		</div>
	);
}