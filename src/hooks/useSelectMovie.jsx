import {useState} from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	background: #242424;
	width: 100%;
	@media (min-width: 768px) {
		background: inherit;
		display: flex;
    justify-content: center;
		margin-top: 60px;
	}
`;

const Label = styled.label`
	color: #fff;
	font-size: 18px;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: 4px;
	text-align: center;
	margin-right: 10px;
`;

const Select = styled.select`
	width: 125px;
	font-size: 18px;
	line-height: 18px;
	background: #242424;
	border: none;
	color: #fff;
	font-weight: bold;
`;

const useSelectMovie = (label, options) => {
	const [state, setState] = useState(1);

	const SelectMovies = () => (
		<Container>
			<Label htmlFor="">{label}</Label>
			<Select
				value={state}
				onChange={(e) => setState(Number(e.target.value))}
				name=""
				id=""
			>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.nombre}
					</option>
				))}
			</Select>
		</Container>
	);

	return [state, SelectMovies];
};

export default useSelectMovie;
