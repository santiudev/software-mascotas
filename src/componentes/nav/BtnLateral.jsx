import React from "react";
import styles from "../../css/nav/btnLateral.module.css";

const BtnLateral = ({ src, alt }) => {
	return(
		<div className={styles["btn-lateral"]}>
			<img 
				src={src}
				className={styles["btn-lateral__img"]}
				alt={alt}
			/>
		</div>
	);
};

export default BtnLateral;