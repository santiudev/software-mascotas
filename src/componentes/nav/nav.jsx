import React from "react";
import "../../css/nav/nav.css";
import LetraTitulo from "../principales/LetraTitulo";
import BtnNav from "./btnNav";
import BtnLateral from "./BtnLateral"
import BtnPrincipal from "../principales/btnPrincipal";
import imgSearch from "../../iconos/search.png";
import imgLogin from "../../iconos/login 2.png"
import { useState } from 'react';

/*
	Array formado de objetos que permite la creación
	de los botones a través de un map. Solo es necesario modificar
	o agregar elementos al array para modificar el nav.
*/
const botones = [
	{clase: "btn-principal", texto: "Inicio"},
	{clase: "btn-secundario", texto: "Perdidos"},
	{clase: "btn-secundario", texto: "Encontrados"},
	{clase: "btn-secundario", texto: "Adoptar"},
	{clase: "btn-secundario", texto: "Blog"},
	{clase: "btn-secundario", texto: "Contacto"}
];

const Nav = () => {
	const [boton, setBoton] = useState(botones);

	function modificarBotones(id){
		const newBotones = botones.map((btn, indice) => {
			if(indice === id){
        /*
          Si el id del boton clickeado anteriormente es igual al indice del boton recorrido por botones.map,
          vamos a retornar el objeto "btn" pero modificaremos su clase que anteriormente era btn-secunadrio,
          a la clase btn-principal.
        */
				return {
					...btn,
					clase: "btn-principal"
				}
			}else if(btn.clase !== 'btn-principal'){
				//No cambia el objeto "btn".
				return btn;
			}else{
			  /* 
          Si no pasa ningun caso anterior hacemos los mismo que el primer caso pero cambiando su clase de
          btn-principal a btn-secundario.
        */
			  return {
          ...btn,
          clase: "btn-secundario"
			  };
			}
		});
    // Vuelve a renderizar los botones con el nuevo array "newBotones"
    setBoton(newBotones);
	}

	return(
		<nav>
			<LetraTitulo
				texto="Ho-Pet"
				color="#DE341D"
			/>
			<div className="contenedor-botones">
				{
					boton.map((btn, indice)=>{
						return(
							<BtnNav
								clase={btn.clase}
								texto={btn.texto}
								onClick={() => modificarBotones(indice)}
								key={indice}
							/>
						);
					})
				}
			</div>
      <div className="contenedor-elementos">
        <p className="separador">|</p>
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
