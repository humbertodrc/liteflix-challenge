import Header from "../Header/Header";
import styles from "../../../styles/Home.module.css";
import Title from "../Title/Title";
import Aside from "../Aside/Aside";

function Home({setModal}) {

	const urlImage = `https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`

	const sectionStyle = {
		backgroundImage: `linear-gradient( to bottom, rgb(11 11 11 / 60%), rgb(13 13 13 / 87%) ), url(${urlImage})`
	};

	return (
		<div className={styles.container} style={sectionStyle}>
			<Header setModal={setModal} />
			<main className={styles.container__main}>
				<Title />
				<Aside />
			</main>
		</div>
	);
}

export default Home;
