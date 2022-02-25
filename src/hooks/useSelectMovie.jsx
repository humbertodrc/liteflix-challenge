import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: #242424;
  width: 100%;
  @media (min-width: 768px) {
		background: inherit;
	}
`


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
`

const useSelectMovie = (label) => {
	const SelectMovies = () => (
		<Container>
			<Label htmlFor="">{label}</Label>
      <Select name="" id="">
				<option value="">Populares</option>
				<option value="">Mis Peliculas</option>
			</Select>
		</Container>
	);

	return [SelectMovies];
};

export default useSelectMovie;
