import React from "react";
import styled from "@emotion/styled";
import Logo from "../../Logo/Logo"
import avatar from "../../../assets/img/perfil.png"

const Header = styled.header`
	display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 22px auto;
	width: 82%;
  height: 36px;
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
  margin-top: 60px;
`


const HeaderModal = () => {
	return (
		<>
    <Header>
			<Navbar>
				<Logo />
				<img src={avatar} alt="avatar" />
			</Navbar>
		</Header>
    <Title>agregar película</Title>
    </>
	);
};

export default HeaderModal;
