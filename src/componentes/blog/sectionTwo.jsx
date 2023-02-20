import styles from '../../css/blog/sectionTwo.module.css';

const SectionTwo = ({ text, img }) => {
	const { title, description } = text;

	return (
		<div className={styles.sectionTwo__container}>
			<img className={styles.sectionTwo__img} src={img} alt={`${img}-img`} />
			<div className={styles.sectionTwo__text}>
				<h2 className={styles.sectionTwo__h2}>
					<b>{title}</b>
				</h2>
				<p className={styles.sectionTwo__p}>{description}</p>
			</div>
		</div>
	);
};

export default SectionTwo;
