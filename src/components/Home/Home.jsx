import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Aside from "../Aside/Aside";
import Spinner from "../Spinner/Spinner";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: top;
	@media (min-width: 768px) {
		background-size: cover;
		min-height: 100vh;
		background-position: 50% 15%;
		animation: focus 2s ease-out;
		-webkit-animation: focus 2s ease-out;
	}
	@keyframes focus {
		0% {
			transform: scale(1.2);
			-webkit-transform: scale(1.2);
			-moz-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
		}
		100% {
			transform: scale(1);
			-webkit-transform: scale(1);
			-moz-transform: scale(1);
			-ms-transform: scale(1);
			-o-transform: scale(1);
		}
	}
`;

const Main = styled.main`
	width: 100%;
	margin: 70px auto 0px;
	@media (min-width: 768px) {
		margin: 0 30px;
		display: grid;
		grid-template-columns: 3fr 1fr;
		column-gap: 2rem;
	}
`

function Home({setModal, popularMovie, setPopularMovie, myMovies}) {
	const [nowPlaying, setNowPlaying] = useState([]);
	const [load, setLoad] = useState(false);

	const getAPINowPlaying = async () => {
		const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`;
		try {
			const response = await fetch(urlNowPlaying);
			const {results} = await response.json();
			const shuffledArray = results
				.sort((a, b) => 0.5 - Math.random())
				.slice(0, 1);
			setNowPlaying(shuffledArray[0]);
		} catch (error) {
			return error;
		}
	};

	// Traer Datos de la API
	const urlImageMovie = `https://image.tmdb.org/t/p/original/${nowPlaying?.poster_path}`;
	const titleMovie = nowPlaying?.original_title;

	useEffect(() => {
		setLoad(true);
		getAPINowPlaying();
		setLoad(false);
	}, []);

	const sectionStyleMovie = nowPlaying?.poster_path
		? {
				backgroundImage: `linear-gradient( to bottom, rgb(11 11 11 / 60%), rgb(13 13 13 / 1%) ), url(${urlImageMovie})`,
		  }
		: {
				background: `#000`,
		  };

	return (
		<>
			{load ? (
				<Spinner />
			) : (
				<Container style={sectionStyleMovie}>
					<Header setModal={setModal} />
					<Main>
						<Title titleMovie={titleMovie} />
						<Aside
							popularMovie={popularMovie}
							setPopularMovie={setPopularMovie}
							myMovies={myMovies}
						/>
					</Main>
				</Container>
			)}
		</>
	);
}

export default Home;
