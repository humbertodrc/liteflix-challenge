import React, {useState} from "react";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
	// Bandera pata mostar Modal
	const [modal, setModal] = useState(false);

	return (
		<>
			<Home setModal={setModal} />
			
		</>
	);
}

export default App;
