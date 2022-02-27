import React from "react";
import styles from "../../../../styles/FormModal.module.css";
import clip from "../../../assets/img/clip.png";

const FormModal = () => {
	return (
		<form>
			<label forHtml="file" className={styles.form__custom}>
				<input
					className={styles.form__file}
					type="file"
					name="file"
					id="file"
				/>
				<img className={styles.form__clip} src={clip} alt="clip" />
				Agregá un archivo
			</label>
			<input className={styles.form__text} placeholder="TÍTULO" type="text" name="" id="" />
			<button type="submit">subir película</button>
			<button>salir</button>
		</form>
	);
};

export default FormModal;
