import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import useSelectMovie from "../../hooks/useSelectMovie";
import {options} from "../../data/options";
import CardMovie from "../Card/CardMovie";

const Container = styled.div`
	width: 100%;
	height: 800px;
	background: #242424;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	@media (min-width: 768px) {
		background: inherit;
		width: 90%;
	}
`;

function Aside() {
	const [movie, SelectMovies] = useSelectMovie("Ver:", options);
	const [variantMovie, setVariantMovie] = useState([]);

	// Get Peliculas 
	const getMoviesPopular = () => {
		const urlMoviesPopular = `https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`;
		if (movie === 1) {
			const getAPIData = async () => {
				const respuesta = await fetch(urlMoviesPopular);
				const {results} = await respuesta.json();
				const shuffledArray = results.sort((a, b) => 0.5 - Math.random()).slice(0,3);
				setVariantMovie(shuffledArray);
			};
			getAPIData();
		} else {
			const myMovies = [
				{
					id: 1,
					original_title: "No hay pelicula",
					image: "www.google.com",
				},
			];
			setVariantMovie(myMovies);
		}
	};

	useEffect(() => {
		getMoviesPopular();
	}, [movie]);

	return (
		<Container>
			<SelectMovies />
			{variantMovie?.map((movie) => (
				<div key={movie.id}>{movie.original_title}</div>
			))}
		</Container>
	);
}

export default Aside;
