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
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="¿Qué sueñan las mascotas?"
						descripcion="Los investigadores han comprobado que los perros duermen muchas horas, pero no de manera continua. De hecho, lo hacen entre 5 y 20 minutos seguidos y se desvelan otros 5, repitiéndose..."
						fecha="17/06/2019 10:03"
					/>
					<Card
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Proteger a nuestras mascotas durante la verbena de San Juan"
						descripcion="Nosotros queremos a nuestros perros y los sentimos parte de la familia. Pero, ¿qué es lo que ellos sienten hacia nosotros? Es bien conocido que, de todos los seres vivos, los perros son los más fieles..."
						fecha="17/06/2019 10:03"
					/>
					<Card
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Cómo afecta la muda del pelo a tu mascota"
						descripcion="Pelos por el suelo, el sofá, la alfombra,… en aquellos lugares en los que nuestra mascota se encuentre cerca, podremos encontrar la gran ‘molestia’ del pelaje ¿Cómo afecta la muda de pelo a..."
						fecha="17/06/2019 10:03"
					/>
					<Card
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="¿Porqué los gatos arañan y muerden cosas?"
						descripcion="Si tu gato tiene la costumbre de masticar o arañar algunas prendas u objetos de tu hogar, puede ser por diferentes razones. ¿Por qué los gatos arañan las cosas? Cuando decides adoptar a un gatito..."
						fecha="17/06/2019 10:03"
					/>
					<Card
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="Los perros mejoran el mundo"
						descripcion="Sí, podemos presumir que nuestro mundo es un lugar mejor gracias a nuestros peluditos. Y es que no solo nos ofrecen su compañía, sino que nos hacen ser mejores personas. Gracias a ellos, el mundo es..."
						fecha="17/06/2019 10:03"
					/>
					<Card
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="¿Por qué no deberías subir a tu perro a la cama?"
						descripcion="Los perros son mascotas adorables y leales, y muchos dueños los consideran como miembros de la familia. Es común que los dueños permitan que sus perros suban a la cama y duerman junto a ellos..."
						fecha="14/03/2023 10:03"
					/>
					<Card
					id={7}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="¿Por qué es importante socializar a tu cachorro?"
						descripcion="La socialización es un proceso crucial para los cachorros, y se refiere a la exposición temprana y constante a diferentes estímulos, ambientes y personas..."
						fecha="17/06/2019 10:03"
					/>
					<Card
					id={8}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="¿Por qué no deberías dejar comida para gatos en el exterior?"
						descripcion="Los gatos son animales independientes que a menudo disfrutan de la vida al aire libre. Aunque es común dejar comida para gatos en el exterior, hay varias razones por las que no deberías hacerlo."
						fecha="17/06/2019 10:03"
					/>
					<Card
					id={9}
						img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
						consejo="Consejo"
						titulo="¿Por qué no deberías dejar a tus hijos solos con mascotas desconocidas?"
						descripcion="Las mascotas pueden ser una gran fuente de alegría y compañía para los niños, pero es importante tener precaución cuando se trata de mascotas desconocidas."
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
