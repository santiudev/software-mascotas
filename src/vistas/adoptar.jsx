// Librerias externas
import React from 'react';

// Components
import Nav from '../componentes/nav/nav';
import Footer from '../componentes/Footer/Footer';
import Paginacion from '../componentes/Perdidos/paginacion';
import AdoptarTarjeta from '../componentes/adoptar/adoptarTarjeta';
import LetraTitulo from '../componentes/principales/LetraTitulo';
import LetraParrafo from '../componentes/principales/letraParrafo';

// Estilos
import styles from '../css/adoptar/adoptar.module.css';
import styles_perdidos from '../css/Perdidos/perdidos.module.css';

const adoptar = () => {
	return (
		<>
			<Nav />
			<section className={styles_perdidos['texto-container']}>
				<article className={styles_perdidos['texto-container__titulo']}>
					<LetraTitulo
						texto="Mascotas en adopcion - Encuentra a tu nuevo mejor amigo"
						clase="letra-titulo--red"
					/>
				</article>
				<article className={styles_perdidos['texto-container__subtitulo']}>
					<LetraParrafo
						texto="“Encuentra a tu compañero fiel en nuestra lista de mascotas en adopción. Tenemos variedad de mascotas en busca de un hogar amoroso. Adoptar es una gran responsabilidad pero también una gran recompensa. ¡Haz feliz a una mascota adoptando hoy!”"
						clase="letra-parrafo--black"
					/>
				</article>
				<article className={styles.adoptarTarjeta__container}>
					<AdoptarTarjeta
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						descripcion="Encuentra a tu compañero fiel en nuestra lista de mascotas en adopción. Tenemos variedad de mascotas en busca de un hogar amoroso. Adoptar es una gran responsabilidad pero también una gran recompensa. ¡Haz feliz a una mascota adoptando hoy!"
						contacto="999 999 999"
					/>
					<AdoptarTarjeta
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						descripcion="Encuentra a tu compañero fiel en nuestra lista de mascotas en adopción. Tenemos variedad de mascotas en busca de un hogar amoroso. Adoptar es una gran responsabilidad pero también una gran recompensa. ¡Haz feliz a una mascota adoptando hoy!"
						contacto="999 999 999"
					/>
					<AdoptarTarjeta
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						descripcion="Encuentra a tu compañero fiel en nuestra lista de mascotas en adopción. Tenemos variedad de mascotas en busca de un hogar amoroso. Adoptar es una gran responsabilidad pero también una gran recompensa. ¡Haz feliz a una mascota adoptando hoy!"
						contacto="999 999 999"
					/>
					<AdoptarTarjeta
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						descripcion="Encuentra a tu compañero fiel en nuestra lista de mascotas en adopción. Tenemos variedad de mascotas en busca de un hogar amoroso. Adoptar es una gran responsabilidad pero también una gran recompensa. ¡Haz feliz a una mascota adoptando hoy!"
						contacto="999 999 999"
					/>
					<AdoptarTarjeta
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						descripcion="Encuentra a tu compañero fiel en nuestra lista de mascotas en adopción. Tenemos variedad de mascotas en busca de un hogar amoroso. Adoptar es una gran responsabilidad pero también una gran recompensa. ¡Haz feliz a una mascota adoptando hoy!"
						contacto="999 999 999"
					/>
					<AdoptarTarjeta
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						descripcion="Encuentra a tu compañero fiel en nuestra lista de mascotas en adopción. Tenemos variedad de mascotas en busca de un hogar amoroso. Adoptar es una gran responsabilidad pero también una gran recompensa. ¡Haz feliz a una mascota adoptando hoy!"
						contacto="999 999 999"
					/>
				</article>
				<Paginacion enlaces={['', '', '', '', '']} />
			</section>
			<Footer />
		</>
	);
};

export default adoptar;
