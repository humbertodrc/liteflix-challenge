import styled from "@emotion/styled";

const Container = styled.div`
	width: 100%;
	height: 800px;
	background: linear-gradient(to top, rgb(0 0 0 / 99%), rgb(36 36 36 / 5%));
	color: #fff;
	@media (min-width: 768px) {
		background: inherit;
	}
`;

function Aside() {
	return (
		<Container>
			<label htmlFor="">Ver:</label>
			<select name="" id="">
				<option value="">Populares</option>
				<option value="">Mis Peliculas</option>
			</select>
		</Container>
	);
}

export default Aside;
