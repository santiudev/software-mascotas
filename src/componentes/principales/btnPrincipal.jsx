import React from "react";
import "../../css/principales/btnPrincipal.css";
import imgPaw from "../../iconos/paw.png";

const BtnPrincipal = ({ texto }) => {
	return(
		<div className="btn-contenedor">
				<p className="btn-parrafo">{texto}</p>
				<img src={imgPaw} alt="buscador" className="btn-img" />
		</div>
	);
};

export default BtnPrincipal;