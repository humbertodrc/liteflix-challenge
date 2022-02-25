import Header from "../Header/Header";
import styles from "../../../styles/Home.module.css";
import Title from "../Title/Title";
import Aside from "../Aside/Aside";

function Home({setModal, urlImageMovie, titleMovie}) {

	

	const sectionStyle = {
		backgroundImage: `linear-gradient( to bottom, rgb(11 11 11 / 60%), rgb(13 13 13 / 87%) ), url(${urlImageMovie})`
	};

	return (
		<div className={styles.container} style={sectionStyle}>
			<Header setModal={setModal} />
			<main className={styles.container__main}>
				<Title titleMovie={titleMovie} />
				<Aside />
			</main>
		</div>
	);
}

export default Home;
