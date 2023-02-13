import styles from '../../css/Footer/SectionOne.module.css';

export default function SectionOne({ title, parrafo }) {
  return (
		<section className={styles.sectionOne__footer}>
			<h3 className={styles.h3__sectionOne}>{ title }</h3>
			<p className={styles.p__sectionOne}>
				{ parrafo }
			</p>
		</section>
	);
}