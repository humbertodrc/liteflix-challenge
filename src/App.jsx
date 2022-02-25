import React, {useState} from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal"

function App() {
	// Bandera pata mostar Modal
	const [modal, setModal] = useState(false);

	return (
		<>
			<Home setModal={setModal} />
			{modal ? (
					<Modal />
			): null}
		</>
	);
}

export default App;
