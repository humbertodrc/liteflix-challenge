import React, {useEffect, useState} from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";

function App() {
	// Bandera pata mostar Modal
	const [modal, setModal] = useState(false);
	const [nowPlaying, setNowPlaying] = useState([])


	const getAPINowPlaying = async() => {
		const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`
		try {
			const respuesta = await fetch(urlNowPlaying)
			const {results} = await respuesta.json();
			const shuffledArray = results.sort((a, b) => 0.5 - Math.random()).slice(0,1);
			setNowPlaying(shuffledArray[0])
		} catch (error) {	
			return error
		}
	}

	useEffect(() => {
		getAPINowPlaying()
	},[])

	// Traer Datos de la API
	const urlImageMovie = `https://image.tmdb.org/t/p/original/${nowPlaying?.poster_path}`
	const titleMovie = `${nowPlaying?.original_title}`

	return (
		<>
			<Home setModal={setModal} urlImageMovie={urlImageMovie} titleMovie={titleMovie} />
			{modal ? <Modal /> : null}
		</>
	);
}

export default App;
