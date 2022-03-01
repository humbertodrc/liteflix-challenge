import styles from "../../../styles/Header.module.css";
import addMovie from "../../assets/img/agregar-película.png";
import photo from "../../assets/img/perfil.png";
import Logo from "../Logo/Logo";
import Alert from "../Icons/Alert"
import Menu from "../Icons/Menu"
import Plus from "../Icons/Plus";

const Header = ({setModal}) => {

  const handleModal = () => {
    setModal(true)
  }

	return (
		<header className={styles.header}>
			<div className={styles.header__actions}>
				<img
					className={styles.header__add}
					src={addMovie}
					alt="agregar pelicula"
					onClick={handleModal}
				/>
				<div className={styles.header__separator}>
					<a className={styles.header__more} onClick={handleModal}>
						<Plus />
						agregar película
					</a>
				</div>
				<Logo />
			</div>
			<div className={styles.header__menu}>
				<Menu />
				<Alert />
				<img className={styles.header__avatar} width={36} height={36} src={photo} alt="foto perfil" />
			</div>
		</header>
	);
};

export default Header;
