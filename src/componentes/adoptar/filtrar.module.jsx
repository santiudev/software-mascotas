import styles from '../../css/adoptar/filtrar.module.css';

const Filtrar = () => {
	return (
		<div className={styles.filtrar}>
			<h1></h1>
			<input className={styles.filtrar__input} list="razas" id="razas_id" name="razas_id" />
			<datalist id="razas">
				<option value="Perros" />
				<option value="Gatos" />
			</datalist>
      <button className={styles.filtrar__btn}>Filtrar</button>
		</div>
	);
};

export default Filtrar;
