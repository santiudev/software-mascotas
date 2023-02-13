import React from 'react';
import styles from '../../css/Footer/footer.module.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Copyright from './Copyright';

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className="huellas"></div>
				<SectionOne
					title="HO-PET"
					parrafo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry"
				/>
				<SectionTwo
					title="Enlaces"
					enlaces={[
						'Blog',
						'FAQ',
						'Nosotros',
						'Contacto',
						'Únete',
						'Política de privacidad',
					]}
				/>
				<SectionTwo
					title="Contacto"
					enlaces={['+1 909 7640024', 'lorem@lorem.com', 'lorem@lorem.com']}
				/>
				<SectionThree title="Suscríbete al boletin" />
			</footer>
			<Copyright year={2023} />
		</>
	);
}
