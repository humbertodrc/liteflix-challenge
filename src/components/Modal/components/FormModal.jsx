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
	isDisabled,
	setIsdisabled,
	setReady,
	setIsCancel,
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

	// Colocar la zona de un color
	console.log(isDragActive);

	const handleModal = () => {
		setModal(false);
	};

	const send_image = (files) => {
		const fileReader = new FileReader();

		fileReader.onerror = () => {
			setIsCancel(true);
		};

		fileReader.onloadstart = (data) => {
			if (fileReader.readyState === 1) {
				console.log("Ha comenzado la carga", data);
				let progress = parseInt(data.loaded);
				setProgress(progress);
			}
		};

		fileReader.onprogress = (data) => {
			if (fileReader.readyState === 1) {
				console.log("Se esta cargado la data", data);
				setIsForm(false);
				setIsProgress(true);
				let progress = parseInt((data.loaded / data.total) * 50, 10);
				setProgress(progress);
			}
		};

		fileReader.onloadend = (data) => {
			if (fileReader.readyState === 2) {
				console.log("Se ha cargado toda la data", data);
				setIsProgress(false);
				setReady(true);
				setIsdisabled(false);
				let progress = parseInt((data.loaded / data.total) * 100, 10);
				setProgress(progress);
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

	const handleSubmit =  (e) => {
		e.preventDefault();

		const {original_title, backdrop_path} = formValues;

		if (original_title == "" || backdrop_path == "") {
			// campos obligatorios
			return;
		} else {
			// nuevo Objeto para no modificar el estado
			const myMoviesID = {
				original_title: formValues.original_title,
				backdrop_path: formValues.backdrop_path,
			};
			myMoviesID.id = generarID();
			setMyMovies([...myMovies, myMoviesID]);
			// setIsProgress(true);
			setIsForm(false);

			setSuccessful(true);
		}
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
				disabled={isDisabled}
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
