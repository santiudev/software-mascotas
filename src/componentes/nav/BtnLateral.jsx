import React from "react";
import "../../css/nav/BtnLateral.css";

const BtnLateral = ({ src, alt }) => {
	return(
		<div className="btn-buscar">
			<img src={src} alt={alt} className="img-Buscar" />
		</div>
	);
};

export default BtnLateral;