import styles from '../../css/blog/sectionOne.module.css';

const SectionOne = ({ text, bg }) => {
  return (
		<div
			style={{ backgroundImage: `url(${bg})` }}
			className={styles.sectionOne__container}>
			<p>{text}</p>
		</div>
	);
}

export default SectionOne;