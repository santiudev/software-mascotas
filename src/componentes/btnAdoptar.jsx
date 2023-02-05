import React from "react";
import "../css/btnAdoptar.css";
import imgPaw from "../iconos/paw.png";

const BtnAdoptar = () => {
	return(
		<div className="btn-adoptar">
				<p className="btn-parrafo">Adoptar</p>
				<img src={imgPaw} alt="buscador" className="btn-img" />
		</div>
	);
};

export default BtnAdoptar;