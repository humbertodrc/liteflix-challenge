import {useState} from "react";
import styles from "../../../../styles/FormModal.module.css";
import clip from "../../../assets/img/clip.png";

const FormModal = ({setModal, myMovies, setMyMovies}) => {
	const [formValues, setFormValues] = useState({
		original_title: "",
		backdrop_path: "",
	});

	const handleModal = () => {
		setModal(false);
	};

	const send_image = (files) => {
		const fileReader = new FileReader();
		fileReader.onload = () => {
			if (fileReader.readyState === 2) {
				setFormValues({...formValues, backdrop_path: fileReader.result});
			}
		};
		fileReader.readAsDataURL(files);
	};

	// generar ID unico
	const generarID = () => {
		const random = Math.random().toString(36).substr(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// nuevo Objeto para no modificar el estado
		const myMoviesID = {
			original_title: formValues.original_title,
			backdrop_path: formValues.backdrop_path,
		};
		myMoviesID.id = generarID();
		setMyMovies([...myMovies, myMoviesID]);
	};

	return (
		<form>
			<label htmlFor="movie" className={styles.form__custom}>
				<input
					className={styles.form__file}
					type="file"
					id="movie"
					accept="image/png,image/jpeg"
					onChange={(e) => {
						send_image(e.target.files[0]);
						setFormValues({
							...formValues,
							backdrop_path: (window.URL || window.webkitURL).createObjectURL(
								e.target.files[0]
							),
						});
					}}
				/>
				<img className={styles.form__clip} src={clip} alt="clip" />
				Agregá un archivo
			</label>
			<input
				value={formValues.original_title}
				className={styles.form__text}
				placeholder="TÍTULO"
				type="text"
				onChange={(e) =>
					setFormValues({...formValues, original_title: e.target.value})
				}
			/>
			<button
				type="submit"
				className={styles.form__upload}
				onClick={handleSubmit}
			>
				subir película
			</button>
			<button type="button" className={styles.form__exit} onClick={handleModal}>
				salir
			</button>
		</form>
	);
};

export default FormModal;
