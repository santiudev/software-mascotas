import React from 'react';
import Nav from '../componentes/nav/nav';
import Footer from '../../src/componentes/Footer/Footer';
import styles from '../css/Perdidos/perdidos.module.css';
import PerdidosTarjeta from '../componentes/Perdidos/perdidosTarjeta';
import LetraTitulo from '../componentes/principales/LetraTitulo';
import { Data } from '../Data_HO-PET';
import Paginacion from '../componentes/Perdidos/paginacion';
import LetraParrafo from '../componentes/principales/letraParrafo';

const Perdidos = () => {
	return (
		<>
			<Nav />
			<section className={styles["texto-container"]}>
				<article className={styles["texto-container__titulo"]}>
					<LetraTitulo
						texto="Mascotas perdidas - Ayuda a encontrar a tu amigo peludo"
						clase="letra-titulo--red"
					/>
				</article>
				<article className={styles["texto-container__subtitulo"]}>
					<LetraParrafo
						texto="“Aquí podrás encontrar información sobre mascotas perdidas y colaborar
						en su búsqueda. Si tienes información sobre alguna mascota perdida o has
						encontrado una, por favor, comparte la información aquí para ayudar a
						reunir a la mascota con su dueño.”"
						clase="letra-parrafo--black"
					/>
				</article>
			</section>
			<section className={styles.perdidos__tarjeta_container}>
				{Data.map(
					({ id, tamaño, fecha, lugar, contacto, descripcion, imagen }) => {
						return (
							<PerdidosTarjeta
								key={id}
								url_img={imagen}
								contacto={contacto}
								desc={descripcion}
								fecha={fecha}
								nombre={id}
								tam={tamaño}
								zona={lugar}
							/>
						);
					}
				)}
			</section>
      <Paginacion />
			<Footer />
		</>
	);
};

export default Perdidos;
