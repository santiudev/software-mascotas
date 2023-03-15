import Nav from '../componentes/nav/nav';
import Footer from '../componentes/Footer/Footer';
import styles from '../css/blog/blog.module.css';
import LetraTitulo from '../componentes/principales/LetraTitulo';
import Card from '../componentes/blog/cardContainer';
import Paginacion from '../componentes/Perdidos/paginacion';

const Blog = () => {
	return (
		<>
			<Nav />
			<div className={styles.blog__container}>
				<LetraTitulo
					className={styles.blog__letraTitle}
					texto="Blog"
					clase="letra-titulo--red"
				/>
				<div className={styles.blog__card}>
					<Card
						id={1}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="¡Siiuumm!,... ¡PIM, PAM, PUM!,... ¡fiiuusss! La noche del 23 de junio queremos darle la bienvenida al solsticio de verano haciendo que la víspera de San Juan..."
						fecha="17/06/2019 10:03"
					/>
					<Card
						id={2}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="¡Siiuumm!,... ¡PIM, PAM, PUM!,... ¡fiiuusss! La noche del 23 de junio queremos darle la bienvenida al solsticio de verano haciendo que la víspera de San Juan..."
						fecha="17/06/2019 10:03"
					/>
					<Card
					id={3}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="¡Siiuumm!,... ¡PIM, PAM, PUM!,... ¡fiiuusss! La noche del 23 de junio queremos darle la bienvenida al solsticio de verano haciendo que la víspera de San Juan..."
						fecha="17/06/2019 10:03"
					/>
					<Card
					id={4}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="¡Siiuumm!,... ¡PIM, PAM, PUM!,... ¡fiiuusss! La noche del 23 de junio queremos darle la bienvenida al solsticio de verano haciendo que la víspera de San Juan..."
						fecha="17/06/2019 10:03"
					/>
					<Card
					id={5}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="¡Siiuumm!,... ¡PIM, PAM, PUM!,... ¡fiiuusss! La noche del 23 de junio queremos darle la bienvenida al solsticio de verano haciendo que la víspera de San Juan..."
						fecha="17/06/2019 10:03"
					/>
					<Card
					id={6}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="¡Siiuumm!,... ¡PIM, PAM, PUM!,... ¡fiiuusss! La noche del 23 de junio queremos darle la bienvenida al solsticio de verano haciendo que la víspera de San Juan..."
						fecha="17/06/2019 10:03"
					/>
					<Card
					id={7}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="¡Siiuumm!,... ¡PIM, PAM, PUM!,... ¡fiiuusss! La noche del 23 de junio queremos darle la bienvenida al solsticio de verano haciendo que la víspera de San Juan..."
						fecha="17/06/2019 10:03"
					/>
					<Card
					id={8}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="¡Siiuumm!,... ¡PIM, PAM, PUM!,... ¡fiiuusss! La noche del 23 de junio queremos darle la bienvenida al solsticio de verano haciendo que la víspera de San Juan..."
						fecha="17/06/2019 10:03"
					/>
					<Card
					id={9}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="¡Siiuumm!,... ¡PIM, PAM, PUM!,... ¡fiiuusss! La noche del 23 de junio queremos darle la bienvenida al solsticio de verano haciendo que la víspera de San Juan..."
						fecha="17/06/2019 10:03"
					/>
				</div>
				<Paginacion enlaces={['', '', '', '', '']} />
			</div>
			<Footer />
		</>
	);
};

export default Blog;
