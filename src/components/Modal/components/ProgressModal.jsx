import {useState, useEffect} from "react";
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
	animation: progress-animation 9s forwards;

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

const ButtonExit = styled.button`
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

const ProgressModal = ({progress, isProgress, setIsProgress}) => {
	const [ready, setReady] = useState(true);

	const closePorgress = () => {
		if (isProgress) {
			setTimeout(() => {
				setIsProgress(!isProgress);
			}, 8000);
		}
	};

	useEffect(() => {
		closePorgress();
	}, [isProgress]);

	return (
		<>
			{isProgress ? (
				<Container>
					<p>Cargando ...</p>
					<ContainerProgress>
						<ProgressBar />
					</ContainerProgress>
					<ContainerButtom>
						<ButtonExit>Cancelar</ButtonExit>
					</ContainerButtom>
				</Container>
			) : (
				<>
					<Container>
						<p>100% Cargado</p>
						<ContainerProgress>
							<ProgressSuccesfull />
						</ContainerProgress>
						<ContainerButtom>
							<Successful>¡listo!</Successful>
						</ContainerButtom>
					</Container>
				</>
			)}
		</>
	);
};

export default ProgressModal;
