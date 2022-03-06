import {useState} from "react";
import styled from "@emotion/styled";
import HeaderModal from "./components/HeaderModal";
import FormModal from "./components/FormModal";
import ProgressModal from "./components/ProgressModal";
import Close from "../Icons/Close";
import SuccessfulModal from "./components/SuccessfulModal";

const Container = styled.div`
	position: absolute;
	background-color: #242424;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	color: #fff;
	@media (min-width: 768px) {
		top: 16%;
		left: 25%;
		right: 25%;
		bottom: 16%;
	}
`;

const Title = styled.p`
	text-align: center;
	color: #64eebc;
	font-size: 22px;
	line-height: 22px;
	font-weight: 700;
	letter-spacing: 4px;
	margin: 72px auto;
	@media (min-width: 768px) {
		margin-top: 48px;
	}
`;

function Modal({setModal, myMovies, setMyMovies}) {
	const [progress, setProgress] = useState(0);
	const [isProgress, setIsProgress] = useState(false);
	const [isForm, setIsForm] = useState(true);
	const [ready, setReady] = useState(false);
	const [isDisabled, setIsdisabled] = useState(true);
	const [isCancel, setIsCancel] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);

	const handleModal = () => {
		setModal(false);
	};

	return (
		<Container>
			<HeaderModal/>
			{!isSuccessful ? (
				<>
					<Close onClick={handleModal} />
					<Title>agregar película</Title>
					<ProgressModal
						isCancel={isCancel}
						progress={progress}
						isProgress={isProgress}
						ready={ready}
						setIsCancel={setIsCancel}
						setReady={setReady}
						setIsForm={setIsForm}
					/>
					<FormModal
						setModal={setModal}
						myMovies={myMovies}
						setMyMovies={setMyMovies}
						setProgress={setProgress}
						setIsProgress={setIsProgress}
						isForm={isForm}
						setIsForm={setIsForm}
						isDisabled={isDisabled}
						setIsdisabled={setIsdisabled}
						setReady={setReady}
						setIsCancel={setIsCancel}
						setIsSuccessful={setIsSuccessful}
					/>
				</>
			) : (
				<>
					<SuccessfulModal setModal={setModal}/>
				</>
			)}
		</Container>
	);
}

export default Modal;
