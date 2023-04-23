import React from 'react';
import Nav from '../componentes/nav/nav';
import Footer from '../../src/componentes/Footer/Footer';
import styles from '../css/Perdidos/perdidos.module.css';
import PerdidosTarjeta from '../componentes/Perdidos/perdidosTarjeta';
import LetraTitulo from '../componentes/principales/LetraTitulo';
import { LetraSubtitulo } from '../componentes/principales/LetraTitulo';
import { Data } from '../Data_HO-PET';
import Paginacion from '../componentes/Perdidos/paginacion';
import LetraParrafo from '../componentes/principales/letraParrafo';

const Encontrados = () => {
	return (
		<>
			<div className={styles.perdidos}>
				<section className={styles['texto-container']}>
					<article className={styles['texto-container__titulo']}>
						<LetraTitulo
							texto="Mascotas Perdidas"
							clase="letra-titulo--red"
						/>
						<LetraSubtitulo
							texto="devuelve a tu amigo peludo a casa"
							clase="letra-titulo--red"
						/>
					</article>
					<article className={styles['texto-container__subtitulo']}>
						<LetraParrafo
							texto="“Aquí podrás encontrar las mascotas que han sido encontradas y que buscan a su dueño. Si encuentras a tu mascota entre las publicadas aquí, no dudes en ponerte en contacto con el número que aparece en el afiche para que puedan ayudarte a reunirse.”"
							clase="letra-parrafo--black"
						/>
					</article>
				</section>
				<section className={styles.perdidos__tarjeta_container}>
					{Data.map(
						({
							id,
							nombre,
							tamaño,
							fecha,
							lugar,
							contacto,
							descripcion,
							imagen,
						}) => {
							return (
								<PerdidosTarjeta
									key={id}
									url_img={imagen}
									contacto={contacto}
									desc={descripcion}
									fecha={fecha}
									nombre={nombre}
									tam={tamaño}
									zona={lugar}
									encontrado={true}
								/>
							);
						}
					)}
				</section>
				<Paginacion enlaces={['', '', '', '', '']} />
			</div>
			<Footer />
		</>
	);
};

export default Encontrados;
