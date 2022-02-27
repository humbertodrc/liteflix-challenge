import React from "react";
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
		top: 18%;
		left: 15%;
		right: 15%;
		bottom: 18%;
	}
`;

function Modal() {
	return (
		<Container>
			<HeaderModal />
			<ProgressModal />
			<FormModal />
		</Container>
	);
}

export default Modal;
