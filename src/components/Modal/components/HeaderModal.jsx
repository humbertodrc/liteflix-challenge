import React from "react";
import styled from "@emotion/styled";
import Logo from "../../Logo/Logo"
import avatar from "../../../assets/img/perfil.png"
import Close from "../../Icons/Close";

const Header = styled.header`
	display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 22px auto;
	width: 82%;
  height: 36px;
  @media (min-width: 768px) {
		display: none;
	}
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 36px;
`

const Title = styled.p`
  text-align: center;
  color: #64EEBC;
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
  letter-spacing: 4px;
  margin: 72px auto;
  @media (min-width: 768px) {
		margin-top: 48px;
	}
`


const HeaderModal = ({setModal}) => {

  const handleModal = () => {
		setModal(false);
	};

	return (
		<>
    <Header>
			<Navbar>
				<Logo />
				<img src={avatar} alt="avatar" />
			</Navbar>
		</Header>
    <Close onClick={handleModal} />
    <Title>agregar película</Title>
    </>
	);
};

export default HeaderModal;
