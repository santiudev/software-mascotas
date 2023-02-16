import React from 'react';
import Nav from '../componentes/nav/nav';
import AdopcionesTarjeta from '../componentes/adopciones/adopcionesTarjeta';
import BtnPrincipal from '../componentes/principales/btnPrincipal';
import LetraTitulo from '../componentes/principales/LetraTitulo';
import Footer from '../componentes/Footer/Footer';
import LetraParrafo from '../componentes/principales/letraParrafo';
import styles from '../css/Perdidos/perdidos.module.css';
import styles_container from '../css/adopciones/adopcionesTarjetaContainer.module.css';

const adopciones = () => {
	return (
		<>
			<Nav />
			<section className={styles['texto-container']}>
				<article className={styles['texto-container__titulo']}>
					<LetraTitulo
						texto="Mascotas Perdidas - devuelve a tu amigo peludo a casa"
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
			<section className={styles_container.adopcionesTarjeta__container}>
				<AdopcionesTarjeta
					imagen="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					contacto="Contacto: +45131563151"
				/>
				<AdopcionesTarjeta
					imagen="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					contacto="Contacto: +45131563151"
				/>
				<AdopcionesTarjeta
					imagen="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					contacto="Contacto: +45131563151"
				/>
				<AdopcionesTarjeta
					imagen="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					contacto="Contacto: +45131563151"
				/>
				<AdopcionesTarjeta
					imagen="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					contacto="Contacto: +45131563151"
				/>
			</section>
			<Footer />
		</>
	);
};

export default adopciones;