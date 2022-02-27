import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	position: absolute;
	background-color: rgb(0 0 0 / 0.92);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
  color: #fff;
`;

function Modal() {
	return <Container>Modal</Container>;
}

export default Modal;
