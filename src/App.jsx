import React, {useState} from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";

function App() {
	// Bandera pata mostar Modal
	const [modal, setModal] = useState(false);

	// Traer Datos de la API
	const urlImageMovie = `https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`
	const titleMovie = `Spider-Man: No Way Home`

	return (
		<>
			<Home setModal={setModal} urlImageMovie={urlImageMovie} titleMovie={titleMovie} />
			{modal ? <Modal /> : null}
		</>
	);
}

export default App;
