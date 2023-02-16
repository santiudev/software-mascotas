import styles from '../../css/adoptar/adoptarTarjeta.module.css';

const adoptarTarjeta = ({ img, descripcion, contacto }) => {
	return (
		<div className={styles.adoptarTarjeta}>
			<div className={styles.adoptarTarjeta__img}>
				<img src={img} alt={`${img}-img`} />
			</div>
			<div className={styles.adoptarTarjeta__description}>
				<p>{ descripcion }</p>
				<p>
					<b>Contacto: +{ contacto }</b>
				</p>
			</div>
		</div>
	);
};

export default adoptarTarjeta;
