import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import useSelectMovie from "../../hooks/useSelectMovie";
import {options} from "../../data/options";
import CardMovie from "../CardMovie/CardMovie";
import Spinner from "../Spinner/Spinner";

const Container = styled.div`
	width: 100%;
	/* height: 800px; */
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

function Aside({popularMovie, setPopularMovie, myMovies}) {
	const [select, SelectMovies] = useSelectMovie("Ver:", options);
	const [loading, setIsLoading] = useState(false);

	// Get Peliculas
	const getMoviesPopular = () => {
		const urlMoviesPopular = `https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`;
		setIsLoading(true);
		if (select === 1) {
			const getAPIData = async () => {
				const respuesta = await fetch(urlMoviesPopular);
				const {results} = await respuesta?.json();
				const shuffledArray = results
					.sort((a, b) => 0.5 - Math.random())
					.slice(0, 4);
				setPopularMovie(shuffledArray);
			};
			getAPIData();
		} else {
			// const myMovies = JSON.parse(localStorage.getItem("Movies"));
			setPopularMovie(myMovies);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		getMoviesPopular();
	}, [select]);

	return (
		<Container>
			{loading ? (
				<p>
					<Spinner />
				</p>
			) : (
				<>
					<SelectMovies />
					{select === 1 ? (
						<>
							{popularMovie?.map((movie) => (
								<CardMovie
									key={movie?.id}
									movie={movie}
									select={select}
									loading={loading}
								/>
							))}
						</>
					) : (
						<>
							{myMovies?.map((movie) => (
								<CardMovie
									key={movie?.id}
									movie={movie}
									select={select}
									loading={loading}
								/>
							))}
						</>
					)}
				</>
			)}
		</Container>
	);
}

export default Aside;
