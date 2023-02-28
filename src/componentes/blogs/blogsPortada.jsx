import styles from '../../css/blogs/blogsPortada.module.css';

export default function BlogsPortada ({ img, titulo }) {
  return (
		<div
			className={styles.blogsPortada__container}
			style={{ backgroundImage: `url(${img})` }}>
			<div className={styles.blogsPortada__data}>
				<span>Consejos</span>
				<h2>{titulo}</h2>
			</div>
		</div>
	);
}