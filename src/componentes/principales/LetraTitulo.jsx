import React from "react";
import styles from "../../css/principales/letraTitulo.module.css";

const LetraTitulo = ({ texto, color }) => {
	return(
    <p className={styles["letra-titulo"]} style={{color: color}}>{texto}</p>
	);
};

export default LetraTitulo;