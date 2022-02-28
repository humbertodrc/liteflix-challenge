import styles from "../../../styles/Title.module.css";
import styled from "@emotion/styled";

const Heading = styled.h1`
	font-size: 40px;
	text-align: center;
	margin: 0;
	letter-spacing: 12px;
	color: #64eebc;
	text-transform: uppercase;
	font-weight: bold;
	@media (min-width: 768px) {
		font-size: 76px;
		text-align: left;
		letter-spacing: 16px;
		margin-top: 1rem;
	}

	@media (min-width: 1600px) {
		font-size: 120px;
		line-height: 100px;
		text-align: left;
		letter-spacing: 16px;
		margin-top: 1rem;
	}
`;

const ContainerTile = styled.div`
	width: 95%;
	margin: 0 auto;
`;

const PreTitle = styled.p`
	font-size: 20px;
	text-align: center;
	line-height: 22px;
	margin: 0;
	letter-spacing: 4px;
	color: #fff;
	@media (min-width: 768px) {
		text-align: left;
		margin-top: 5rem;
	}
`;

const ContainerButtons = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
	}
`;

const ButtonPlay = styled.button`
	font-size: 18px;
	line-height: 22px;
	color: #fff;
	display: block;
	width: 248px;
	padding: 1.5rem;
	margin-top: 2rem;
	background: #242424;
	letter-spacing: 4px;
	border: none;
	box-sizing: border-box;
	@media (min-width: 768px) {
		padding: 16px;
	}
`;

const ButtonList = styled.button`
	font-size: 18px;
	line-height: 22px;
	color: #fff;
	display: block;
	width: 248px;
	padding: 1.5rem;
	margin-top: 1rem;
	letter-spacing: 4px;
	background: rgba(36, 36, 36, 0.9);
	border: 1px solid rgba(255, 255, 255, 0.5);
	box-sizing: border-box;
	@media (min-width: 768px) {
		padding: 15px;
		margin-left: 1rem;
		background: rgba(36, 36, 36, 0.1);
		box-sizing: border-box;
	}
`;

function Title({titleMovie}) {
	return (
		<div className={styles.title}>
			<PreTitle>ORIGINAL DE LITEFLIX</PreTitle>
				<ContainerTile>
					<Heading>{titleMovie}</Heading>
				</ContainerTile>
				<ContainerButtons>
					<ButtonPlay>REPRODUCIR</ButtonPlay>
					<ButtonList>MI LISTA</ButtonList>
				</ContainerButtons>
		</div>
	);
}

export default Title;
