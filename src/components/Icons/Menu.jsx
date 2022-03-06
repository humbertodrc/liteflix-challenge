import styled from "@emotion/styled";

const MenuSvg = styled.svg`
	display: none;
	cursor: pointer;

	&:hover{
		transform: scale(1.3);
	}

	@media (min-width: 768px) {
		display: block;
		margin-right: 50px;
	}
`;

const Menu = (props) => (
	<MenuSvg
		width={27}
		height={14}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M0 1h27M0 7h27M10 13h17" stroke="#fff" />
	</MenuSvg>
);

export default Menu;
