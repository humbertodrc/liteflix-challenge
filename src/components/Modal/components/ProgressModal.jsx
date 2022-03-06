import styled from "@emotion/styled";

const Container = styled.div`
	width: 90%;
	margin: 0 auto;

	p {
		color: #fff;
		font-size: 14px;
		line-height: 16px;
		letter-spacing: 4px;
	}
`;

const ContainerProgress = styled.div`
	width: 100%;
	height: 4px;
	background: rgba(255, 255, 255, 0.5);
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	border-radius: 7px;
	margin: 1rem auto;
`;

const ProgressBar = styled.div`
	position: absolute;
	left: 0;
	height: 8px;
	border-radius: 7px;
	background: #64eebc;
	animation: progress-animation 4s forwards;

	@keyframes progress-animation {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
`;

const ContainerButtom = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const ButtonCancel = styled.button`
	color: #fff;
	font-size: 16px;
	letter-spacing: 4px;
	font-weight: bold;
	border: none;
	background: transparent;
	text-transform: uppercase;
	cursor: pointer;
	margin-bottom: 1rem;
`;

const Successful = styled.span`
	font-size: 16px;
	letter-spacing: 4px;
	color: #64eebc;
`;

const ProgressSuccesfull = styled.div`
	position: absolute;
	left: 0;
	height: 8px;
	border-radius: 7px;
	background: #64eebc;
	width: 100%;
`;

const ProgressError = styled.div`
	position: absolute;
	left: 0;
	height: 8px;
	border-radius: 7px;
	background: #ff0000;
	width: 100%;
`;

const Retry = styled.span`
	font-size: 16px;
	letter-spacing: 4px;
	color: #fff;
`;

const ProgressModal = ({
	isCancel,
	progress,
	isProgress,
	ready,
	setIsCancel,
	setReady,
	setIsForm
}) => {

	const handleCancel = () => {
		setIsCancel(true)
		setReady(false)
		setIsCancel(false)
	}

	const handleRetry = () => {
		setIsCancel(false)
		setReady(false)
		setIsCancel(false)
		setIsForm(true)
	}

	return (
		<>
			{isCancel && (
				<Container>
					<p>¡ERROR! no se pudo cargar la película</p>
					<ContainerProgress>
						<ProgressError />
					</ContainerProgress>
					<ContainerButtom>
						<Retry onClick={handleRetry}>Reintentar</Retry>
					</ContainerButtom>
				</Container>
			)}
			{isProgress && (
				<Container>
					<p>Cargando {progress}% ...</p>
					<ContainerProgress>
						<ProgressBar />
					</ContainerProgress>
					<ContainerButtom>
						<ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>
					</ContainerButtom>
				</Container>
			)}
			{ready && (
				<Container>
					<p>{progress}% Cargado</p>
					<ContainerProgress>
						<ProgressSuccesfull />
					</ContainerProgress>
					<ContainerButtom>
						<Successful>¡listo!</Successful>
					</ContainerButtom>
				</Container>
			)}
		</>
	);
};

export default ProgressModal;
