import styles from '../../css/Footer/SectionThree.module.css';

export default function SectionThree ({ title }) {
  return (
		<section className={styles.sectionThree}>
			<h3 className={styles.sectionThree__h3}>{title}</h3>
			<form className={styles.sectionThree__form} action="#" method="post">
				<input type="email" placeholder="Email" />
				<input type="submit" value="✉️" />
			</form>
			<div className={styles.sectionThree__redes}>
				{' '}
				{/* Cambiar links de logos */}
				<a href="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
						alt="fb-logo"
					/>
				</a>
				<a href="/">
					<img
						src="https://cubminnesota.org/wp-content/uploads/2018/01/Twitter-logo-300x300.png"
						alt="twitter-logo"
					/>
				</a>
				<a href="/">
					<img
						src="https://i1.wp.com/globalinfusion.org/wp-content/uploads/2018/01/ig-logo-email.png?ssl=1"
						alt="ig-logo"
					/>
				</a>
				<a href="/">
					<img
						src="https://pnggrid.com/wp-content/uploads/2021/05/Square-YouTube-Logo-PNG-2048x2048.png"
						alt="yt-logo"
					/>
				</a>
			</div>
		</section>
	);
}