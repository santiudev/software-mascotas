import React from "react";
import "../../css/nav/btnNav.css";

const BtnNav = ({ clase, texto, onClick }) => {
	return(
    <button className={`btn ${clase}`} onClick={onClick} type="button">
			{texto}
		</button>
	);
};

export default BtnNav;