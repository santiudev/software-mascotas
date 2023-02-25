import React from 'react';
import styles from '../../css/Footer/footer.module.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Copyright from './Copyright';
import huellas from '../../iconos/imagen de fondo de huellas/bg-footer.png';

export default function Footer() {
	return (
		<footer>
			<div className={styles.footer__container}>
				<img className={styles.footer__huellas} src={huellas} alt="huellas" />
				<SectionOne
					title="HO-PET"
					parrafo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry"
				/>
				<div className={styles.sectionTwo__container}>
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
						contact={{
							tlf: ['+1 909 7640024'],
							emails: ['lorem@lorem.com', 'lorem@lorem.com'],
						}}
					/>
				</div>
				<SectionThree />
			</div>
			<Copyright year={2023} />
		</footer>
	);
}
