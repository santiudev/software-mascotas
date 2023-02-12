import React from "react";
import styles from "../../css/principales/letraParrafo.module.css";

const LetraParrafo = ({ texto, clase }) =>{
  return(
    <p className={`${styles[`letra-parrafo`]} ${styles[clase]}`}>
      {texto}
    </p>
  );
};

export default LetraParrafo;