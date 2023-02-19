import styles from '../../css/blog/sectionThreeMini.module.css';

const SectionThreeMini = ({ text }) => {
	return (
		<div className={styles.sectionThreeMini__container}>
			<p>{text}</p>
		</div>
	);
};

export default SectionThreeMini;
