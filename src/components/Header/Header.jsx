import styled from "@emotion/styled";
import addMovie from "../../assets/img/agregar-película.png";
import photo from "../../assets/img/perfil.png";
import Logo from "../Logo/Logo";
import Alert from "../Icons/Alert";
import Menu from "../Icons/Menu";
import Plus from "../Icons/Plus";

const ContainerHeader = styled.header`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (min-width: 768px) {
		justify-content: space-between;
	}
`;

const AddMovie = styled.img`
	width: 36px;
	height: 36px;
	@media (min-width: 768px) {
		display: none;
	}
`;

const ContainerAddMovie = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 70%;
	@media (min-width: 768px) {
		justify-content: space-evenly;
		width: 40%;
		flex-direction: row-reverse;
	}
`;

const Separator = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AddMore = styled.button`
	display: none;
	@media (min-width: 768px) {
		font-size: 18px;
		text-transform: uppercase;
		margin-left: 1rem;
		color: #fff;
		display: inline-block;
		cursor: pointer;
		background: transparent;
		border: none;
	}
	&:hover {
		transform: scale(1.2);
	}
`;

const ContainerMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 30%;
	@media (min-width: 768px) {
		width: 300px;
	}
`;

const Avatar = styled.img`
	display: block;
	margin: 0 auto;
	cursor: pointer;
`;

const Header = ({setModal}) => {
	const handleModal = () => {
		setModal(true);
	};

	return (
		<ContainerHeader>
			<ContainerAddMovie>
				<AddMovie src={addMovie} alt="agregar pelicula" onClick={handleModal} />
				<Separator>
					<AddMore onClick={handleModal}>
						<Plus />
						agregar película
					</AddMore>
				</Separator>
				<div>
					<Logo />
				</div>
			</ContainerAddMovie>
			<ContainerMenu>
				<Menu />
				<Alert />
				<Avatar width={36} height={36} src={photo} alt="foto perfil" />
			</ContainerMenu>
		</ContainerHeader>
	);
};

export default Header;
