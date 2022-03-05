import {useState} from "react";
import styled from "@emotion/styled";
import HeaderModal from "./components/HeaderModal";
import FormModal from "./components/FormModal";
import ProgressModal from "./components/ProgressModal";

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

function Modal({setModal, myMovies, setMyMovies}) {
	const [progress, setProgress] = useState(0);
	const [isProgress, setIsProgress] = useState(false);
	const [isForm, setIsForm] = useState(true);
	const [ready, setReady] = useState(false);
	const [isDisabled, setIsdisabled] = useState(true);
	const [isCancel, setIsCancel] = useState(false);


	return (
		<Container>
			<HeaderModal setModal={setModal} />
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
			/>
		</Container>
	);
}

export default Modal;
