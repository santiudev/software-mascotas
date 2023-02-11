import React from "react";
import styles from "../../css/principales/letraTitulo.module.css";

const LetraTitulo = ({ texto, color, align }) => {
	return(
    <p className={styles["letra-titulo"]} style={{color: color, textAlign: align}}>{texto}</p>
	);
};

export default LetraTitulo;