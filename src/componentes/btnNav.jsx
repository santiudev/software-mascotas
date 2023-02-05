import React from "react";
import "../css/btnNav.css";

const btnNav = ({ clase, texto, onClick }) => {
	return(
    <button className={`btn ${clase}`} onClick={onClick} type="button">
			{texto}
		</button>
	);
};

export default btnNav;