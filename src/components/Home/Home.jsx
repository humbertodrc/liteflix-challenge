import Header from "../Header/Header";
import styles from "../../../styles/Home.module.css";
import Title from "../Title/Title";
import Aside from "../Aside/Aside";

function Home({setModal}) {
	return (
		<div className={styles.container}>
			<Header setModal={setModal} />
			<Title />
			<Aside />
		</div>
	);
}

export default Home;
