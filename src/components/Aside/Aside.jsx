import styled from "@emotion/styled";
import useSelectMovie from "../../hooks/useSelectMovie";

const Container = styled.div`
	width: 100%;
	height: 800px;
	background: #242424;
	@media (min-width: 768px) {
		background: inherit;
	}
`;

function Aside() {

	const [ SelectMovies ] = useSelectMovie("Ver:")


	return (
		<Container>
			<SelectMovies />
			
		</Container>
	);
}

export default Aside;
