import styles from '../../css/blog/sectionThree.module.css';
import SectionThreeMini from './sectionThreeMini';

const SectionThree = ({ text }) => {
	return (
		<div className={styles.sectionThree__container}>
      <SectionThreeMini />
    </div>
	);
};

export default SectionThree;
