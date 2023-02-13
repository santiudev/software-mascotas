import icon from '../../iconos/arrow-down-sign-to-navigate.png';
import styles from '../../css/Perdidos/paginacion.module.css';

export default function Paginacion () {
  return (
		<div className={styles.paginacion}>
			<div className={styles.paginacion__container}>
				<img
					className={styles.paginacion__img}
					src={icon}
					alt={`arrow-img`}
				/>
				<a className={styles.paginacion__a} href="/">
					1
				</a>
				<a className={styles.paginacion__a} href="/">
					2
				</a>
				<a className={styles.paginacion__a} href="/">
					3
				</a>
				<a className={styles.paginacion__a} href="/">
					4
				</a>
				<a className={styles.paginacion__a} href="/">
					5
				</a>
				<img
					className={styles.paginacion__img}
					src={icon}
					alt={`arrow-img`}
				/>
			</div>
		</div>
	);
}