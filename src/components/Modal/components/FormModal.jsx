import {useState} from "react";
import {useDropzone} from "react-dropzone";
import styles from "../../../../styles/FormModal.module.css";
import clip from "../../../assets/img/clip.png";
import styled from "@emotion/styled";

const ContainerInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	border: 1px dashed #ffffff;
	color: #fff;
	cursor: pointer;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 4px;
	font-weight: 400;
	margin: 0 auto 2rem;
	min-height: 81px;
	overflow: hidden;
	position: relative;
	text-align: center;
	width: 90%;
	@media (min-width: 768px) {
		margin-bottom: 1rem;
	}
`;

const InputFile = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

const ImgClip = styled.img`
	margin-right: 0.8rem;
`;

const InputText = styled.input`
	background: transparent;
	border: none;
	border-bottom: solid 1px #fff;
	display: block;
	width: 69%;
	margin: 0 auto 1rem;
	color: #fff;
	text-align: center;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 4px;
	padding: 1rem;
	@media (min-width: 768px) {
		width: 40%;
	}
`;

const ButtonUpLoad = styled.button`
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 4px;
	color: #242424;
	width: 248px;
	height: 56px;
	display: block;
	margin: 40px auto 24px;
`;

const ButtonExit = styled.button`
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 4px;
	color: #fff;
	width: 248px;
	height: 56px;
	display: block;
	margin: 24px auto;
	background: rgba(36, 36, 36, 0.5);
	border: 1px solid rgba(255, 255, 255, 0.5);
	box-sizing: border-box;
	@media (min-width: 768px) {
		display: none;
	}
`;

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
	setIsSuccessful,
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

	const handleSubmit = (e) => {
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

			setIsSuccessful(true);
		}
	};

	return (
		<form>
			{isForm && (
				<ContainerInput {...getRootProps()}>
					<InputFile
						type="file"
						id="movie"
						accept="image/png,image/jpeg"
						onChange={(e) => {
							send_image(e.target.files[0]);
						}}
						{...getInputProps()}
					/>
					<ImgClip src={clip} alt="clip" />
					Agregá un archivo
				</ContainerInput>
			)}
			<InputText
				value={formValues.original_title}
				placeholder="TÍTULO"
				type="text"
				onChange={(e) =>
					setFormValues({...formValues, original_title: e.target.value})
				}
			/>
			<ButtonUpLoad type="submit" onClick={handleSubmit} disabled={isDisabled}>
				subir película
			</ButtonUpLoad>
			<ButtonExit type="button" onClick={handleModal}>
				salir
			</ButtonExit>
		</form>
	);
};

export default FormModal;
