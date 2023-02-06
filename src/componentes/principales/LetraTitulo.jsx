import React from "react";
import "../../css/principales/letraTitulo.css";

const LetraTitulo = ({ texto, color }) => {
	return(
    <p className="letra-titulo" style={{color: color}}>{texto}</p>
	);
};

export default LetraTitulo;