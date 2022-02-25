import Header from "../Header/Header";
import styles from "../../../styles/Home.module.css";

function Home({setModal}) {
	return (
		<div className={styles.container}>
			<Header setModal={setModal} />
			
		</div>
	);
}

export default Home;
