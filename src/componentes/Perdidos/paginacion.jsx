import icon from '../../iconos/arrow-down-sign-to-navigate.png';
import styles from '../../css/Perdidos/paginacion.module.css';

export default function Paginacion () {
  return (
		<div className={styles.paginacion__container}>
			<div className={styles.paginacion__subcontainer}>
				<img
					className={styles.paginacion__img}
					src={icon}
					alt={`${icon}-img`}
				/>
				<a className={styles.paginacion__a} href="/">
					<span>
						<u>1</u>
					</span>
				</a>
				<a className={styles.paginacion__a} href="/">
					<span>
						<u>2</u>
					</span>
				</a>
				<a className={styles.paginacion__a} href="/">
					<span>
						<u>3</u>
					</span>
				</a>
				<a className={styles.paginacion__a} href="/">
					<span>
						<u>4</u>
					</span>
				</a>
				<a className={styles.paginacion__a} href="/">
					<span>
						<u>5</u>
					</span>
				</a>
				<img
					className={styles.paginacion__img}
					src={icon}
					alt={`${icon}-img`}
				/>
			</div>
		</div>
	);
}