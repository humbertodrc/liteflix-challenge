import {useState} from "react";
import {useDropzone} from "react-dropzone";
import styles from "../../../../styles/FormModal.module.css";
import clip from "../../../assets/img/clip.png";

const FormModal = ({
	setModal,
	myMovies,
	setMyMovies,
	setProgress,
	setIsProgress,
	isForm,
	setIsForm,
}) => {
	const [formValues, setFormValues] = useState({
		original_title: "",
		backdrop_path: "",
	});

	const {getRootProps, getInputProps, isDragActive} = useDropzone({
		accept: "image/*",
		onDrop: (acceptFiles) => {
			const file = acceptFiles[0];
			send_image(file);
		},
	});

	console.log(isDragActive);

	const handleModal = () => {
		setModal(false);
	};

	const send_image = (files) => {
		const fileReader = new FileReader();
		fileReader.onprogress = (data) => {
			if (data.lengthComputable) {
				console.log(data);
				const progress = parseInt((data.loaded / data.total) * 100, 10);
				setProgress(progress);
			}
		};
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
		setIsProgress(true);
		setIsForm(false);
	};

	return (
		<form>
			{isForm && (
				<div
					// htmlFor="movie"
					className={styles.form__custom}
					{...getRootProps()}
				>
					<input
						className={styles.form__file}
						type="file"
						id="movie"
						accept="image/png,image/jpeg"
						onChange={(e) => {
							send_image(e.target.files[0]);
						}}
						{...getInputProps()}
					/>
					<img className={styles.form__clip} src={clip} alt="clip" />
					Agregá un archivo
				</div>
			)}
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
