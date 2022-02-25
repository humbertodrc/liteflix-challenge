import styled from "@emotion/styled";
import useSelectMovie from "../../hooks/useSelectMovie";
import {options} from "../../data/data"

const Container = styled.div`
	width: 100%;
	height: 800px;
	background: #242424;
	@media (min-width: 768px) {
		background: inherit;
	}
`;

function Aside() {

	const [ state, SelectMovies ] = useSelectMovie("Ver:", options)


	return (
		<Container>
			<SelectMovies />
			{state}
		</Container>
	);
}

export default Aside;
