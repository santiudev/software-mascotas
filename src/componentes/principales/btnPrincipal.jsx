import React from "react";
import styles from "../../css/principales/btnPrincipal.module.css";
import imgPaw from "../../iconos/paw.png";

const BtnPrincipal = ({ texto }) => {
	return(
		<button className={styles.btn} type="button">
				<p className={styles.btn__text}>{texto}</p>
				<img 
					src={imgPaw}
					className={styles.btn__img}
					alt="buscador"
				/>
		</button>
	);
};

export default BtnPrincipal;