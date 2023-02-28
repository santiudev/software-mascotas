import { useParams } from "react-router-dom"
import BlogsPortada from "../componentes/blogs/blogsPortada";
import Nav from "../componentes/nav/nav";
import Footer from "../componentes/Footer/Footer";
import styles from '../css/blogs/blogs.module.css';

export default function Blogs ({ imgP, tituloP }) {

  const { id } = useParams();

  return (
		<>
			<Nav />
			<div className={styles.blogs__container}>
				<BlogsPortada
					img={
						imgP
							? imgP
							: 'https://frenchiemania.com/wp-content/uploads/2014/08/caracteristicas-bulldog-frances-perro-pequeno.jpg'
					}
					titulo="PROTEGER A NUESTRAS MASCOTAS DURANTE LA VERBERNA DE SAN JUAN"
				/>
			</div>
      <Footer />
		</>
	);
}