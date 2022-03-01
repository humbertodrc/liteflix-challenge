import React from "react";
import styles from "../../../../styles/FormModal.module.css";
import clip from "../../../assets/img/clip.png";

const FormModal = () => {



	return (
		<form>
			<label htmlFor="movie" className={styles.form__custom}>
				<input
					className={styles.form__file}
					type="file"
					id="movie"
				/>
				<img className={styles.form__clip} src={clip} alt="clip" />
				Agregá un archivo
			</label>
			<input className={styles.form__text} placeholder="TÍTULO" type="text" name="" id="" />
			<button type="submit" className={styles.form__upload}>subir película</button>
			<button type="button" className={styles.form__exit}>salir</button>
		</form>
	);
};

export default FormModal;
