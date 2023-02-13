import styles from '../../css/Footer/SectionTwo.module.css';

export default function SectionTwo ({ title, enlaces }) {
  return (
		<section className={styles.sectionTwo}>
			<h3 className={styles.sectionTwo__h3}>{ title }</h3>
			<ul className={styles.sectionTwo__ul}>
        {
          enlaces.map((value, index) => {
            return (
             <li className={styles.sectionTwo__li} key={index}>{ value }</li>
            );
          })
        }
			</ul>
		</section>
	);
}