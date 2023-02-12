import React from "react";
import styles from "../../css/principales/letraTitulo.module.css";

const LetraTitulo = ({ texto, align, clase }) => {
	return(
    <p className={`${styles[`letra-titulo`]} ${styles[clase]}`} style={{textAlign: align}}>{texto}</p>
	);
};

export default LetraTitulo;