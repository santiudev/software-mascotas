import styles from '../../css/adoptar/adoptarTarjeta.module.css';

const adoptarTarjeta = ({ img, nombre, descripcion, edad, refugio, contacto }) => {
	return (
		<div className={styles.adoptarTarjeta}>
			
			<div className={styles.adoptarTarjeta__img}>
				<img src={img} alt={`${img}-img`} />
			</div>
			
			<div className={styles.adoptarTarjeta__description}>
				<h3>
					<h3>Nombre: { nombre }</h3>
				</h3>
				<p>{ descripcion }</p>
				<p>
					<b>Edad: { edad }</b>
				</p>
				<p>
					<b>Refugio: { refugio }</b>
				</p>
				<p>
					<b>Contacto: +{ contacto }</b>
				</p>
			</div>
		</div>
	);
};

export default adoptarTarjeta;
