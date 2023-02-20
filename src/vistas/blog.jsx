import Nav from '../componentes/nav/nav';
import Footer from '../componentes/Footer/Footer';
import styles from '../css/blog/blog.module.css';
import LetraTitulo from '../componentes/principales/LetraTitulo';
import Card from '../componentes/blog/cardContainer';

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
				<Card
					s1Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
					s1bg="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					s2Text={{
						title: 'Lorem ipsum dolor sit amet, consectetur',
						description:
							'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
					}}
					s2Img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					s3Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<Card
					s1Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
					s1bg="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					s2Text={{
						title: 'Lorem ipsum dolor sit amet, consectetur',
						description:
							'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
					}}
					s2Img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					s3Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<Card
					s1Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
					s1bg="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					s2Text={{
						title: 'Lorem ipsum dolor sit amet, consectetur',
						description:
							'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
					}}
					s2Img="https://nfnatcane.es/blog/wp-content/uploads/2022/10/historia-de-la-raza-chihuahua.jpg"
					s3Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
			</div>
			<Footer />
		</>
	);
};

export default Blog;
