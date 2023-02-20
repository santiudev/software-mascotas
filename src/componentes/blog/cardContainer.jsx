import styles from '../../css/blog/cardContainer.module.css';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';

const Card = ({ s1Text, s1bg, s2Text, s2Img, s3Text }) => {

  const { title, description } = s2Text;

	return (
		<div className={styles.cardContainer}>
			<SectionOne text={s1Text} bg={s1bg} />
			<SectionTwo text={{
        title,
        description
      }} img={s2Img} />
			<SectionThree text={s3Text} />
		</div>
	);
};

export default Card;
