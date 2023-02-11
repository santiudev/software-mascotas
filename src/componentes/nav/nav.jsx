// React
import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Estilos
import styles from "../../css/nav/nav.module.css";

// Componentes
import LetraTitulo from "../principales/LetraTitulo";
import BtnNav from "./btnNav";
import BtnLateral from "./BtnLateral"
import BtnPrincipal from "../principales/btnPrincipal";

// Imágenes
import imgSearch from "../../iconos/search.png";
import imgLogin from "../../iconos/login 2.png"

/*
	Array formado de objetos que permite la creación
	de los botones a través de un map. Solo es necesario modificar
	o agregar elementos al array para modificar el nav.
*/
const botones = [
	{clase: "btn--principal", texto: "Inicio", path: "/"},
	{clase: "btn--secundario", texto: "Perdidos", path: "/perdidos"},
	{clase: "btn--secundario", texto: "Encontrados", path: "/encontrados"},
	{clase: "btn--secundario", texto: "Adoptar", path: "/adoptar"},
	{clase: "btn--secundario", texto: "Blog", path: "/blog"},
	{clase: "btn--secundario", texto: "Contacto", path: "/contacto"}
];

function modificarBotones(id){
	const newBotones = botones.map((btn, indice) => {
		if(indice === id){
			/*
				Si el id del boton clickeado anteriormente es igual al indice del boton recorrido por botones.map,
				vamos a retornar el objeto "btn" pero modificaremos su clase que anteriormente era btn--secunadrio,
				a la clase btn--principal.
			*/
			return {
				...btn,
				clase: "btn--principal"
			}
		}else if(btn.clase !== 'btn--principal'){
			//No cambia el objeto "btn".
			return btn;
		}else{
			/* 
				Si no pasa ningun caso anterior hacemos los mismo que el primer caso pero cambiando su clase de
				btn--principal a btn--secundario.
			*/
			return {
				...btn,
				clase: "btn--secundario"
			};
		}
	});
	// Retorna el nuevo array "newBotones"
	return newBotones;
}

const Nav = () => {
	const [boton, setBoton] = useState(botones);

	return(
		<nav className={styles.nav}>
			<LetraTitulo
				texto="Ho-Pet"
				color="#DE341D"
			/>
			<div className={styles["nav__contenedor-botones"]}>
				{
					boton.map((btn, indice)=>{
						return(
							<Link to={btn.path} key={indice}>
								<BtnNav
									clase={btn.clase}
									texto={btn.texto}
									/*
										La función "modificarBotones" retorna una nueva matriz "newBotones"
										y esta se asigna al hook de estado "boton" mediante la función "setBoton".
										Esto provocará un renderizado de los componentes de los botones.
									*/
									onClick={() => setBoton(modificarBotones(indice))}
								/>
							</Link>
						);
					})
				}
			</div>
      <div className={styles["nav__contenedor-elementos"]}>
        <p className={styles.nav__separador}>|</p>
        <BtnLateral 
          src={imgSearch}
          alt="Search"
        />
        <BtnLateral 
          src={imgLogin}
          alt="Login"
        />
        <BtnPrincipal
					texto="Adoptar"
				/>
      </div>
    </nav>
	);
}

export default Nav;
