import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const Heading = styled.h2`
	font-size: 24px;
	line-height: 26px;
	font-weight: bold;
	letter-spacing: 4px;
	text-align: center;
  margin: 192px auto 32px;
`;

const ContainerMessage = styled.div`
  width: 300px;
  margin: 32px auto 133px;
`

const Message = styled.p`
	font-size: 20px;
	line-height: 32px;
	letter-spacing: 4px;
  text-align: center;
`;

const ButtonHome = styled.button`
  width: 248px;
  height: 56px;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 4px;
  color: #242424;
  display: block;
  margin: 0 auto;
`

const SuccessfulModal = ({setModal}) => {

  const handleHome = () => {
    setModal(false)
  }

	return (
		<Container>
			<Heading>¡Felicitaciones!</Heading>
			<ContainerMessage>
				<Message>Liteflix The Movie fue correctamente subida.</Message>
			</ContainerMessage>
			<ButtonHome onClick={handleHome}>ir a home</ButtonHome>
		</Container>
	);
};

export default SuccessfulModal;
