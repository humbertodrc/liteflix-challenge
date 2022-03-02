import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import styles from "../../../styles/Home.module.css";
import Title from "../Title/Title";
import Aside from "../Aside/Aside";
import Spinner from "../Spinner/Spinner";

function Home({modal, setModal, popularMovie, setPopularMovie, myMovies}) {
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

	// condicional imagen
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
				<div className={styles.container} style={sectionStyleMovie}>
					<Header setModal={setModal} />
					<main className={styles.container__main}>
						<Title titleMovie={titleMovie} />
						{!modal ? (
							<Aside
								popularMovie={popularMovie}
								setPopularMovie={setPopularMovie}
								myMovies={myMovies}
							/>
						) : null}
					</main>
				</div>
			)}
		</>
	);
}

export default Home;
