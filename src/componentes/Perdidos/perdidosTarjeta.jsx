import SubData from './subData';
import styles from '../../css/Perdidos/perdidosTarjeta.module.css';
import { FbIcon, ShareIcon, TwitterIcon, WsspIcon } from '../../iconos/svg/icons_svg';

export default function PerdidosTarjeta({
	url_img,
	nombre,
	tam,
	zona,
	fecha,
	contacto,
	desc,
	encontrado,
}) {
	const data = [nombre, tam, zona, fecha, contacto, desc];
	const data_subtitle = [
		'Nombre',
		'Tamaño',
		'Zona',
		'Fecha',
		'Contacto',
		'Descripcion',
	];

	return (
		<div className={styles.perdidosTarjeta}>
			<img
				className={styles.perdidosTarjeta__img}
				src={url_img}
				alt={`${nombre}-img`}
			/>
			<h3
				className={
					encontrado
						? styles.perdidosTarjeta__h3_orange
						: styles.perdidosTarjeta__h3_red
				}>
				{encontrado ? 'Encontrado' : `Se perdió "${nombre}"`}
			</h3>
			<div className={styles.perdidosTarjeta__subdata_container}>
				{data.map((value, index) => {
					return (
						<SubData
							className={styles.perdidosTarjeta__subdata}
							subtitle={data_subtitle[index]}
							data={value}
						/>
					);
				})}
			</div>
			<div className={styles.perdidosTarjeta__redes}>
				<WsspIcon encontrado={encontrado} />
				<TwitterIcon encontrado={encontrado} />
				<FbIcon encontrado={encontrado} />
				<ShareIcon encontrado={encontrado} />
			</div>
		</div>
	);
}
