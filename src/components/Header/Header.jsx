import styles from "../../../styles/Header.module.css";
import addMovie from "../../assets/img/agregar-película.png";
import more from "../../assets/img/plus.png";
import icono from "../../assets/img/menu.png";
import notifications from "../../assets/img/notificacion.png";
import photo from "../../assets/img/perfil.png";

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
						<img
							className={styles.header__cross}
							src={more}
							alt="icono agregar pelicula"
						/>
						agregar película
					</a>
				</div>
				<p className={styles.header__logo}>
					LITE<span className={styles.header__modifier}>FLIX</span>
				</p>
			</div>
			<div className={styles.header__menu}>
				<img className={styles.header__icono} src={icono} alt="icono menu" />
				<img
					className={styles.header__notifications}
					src={notifications}
					alt="notificaciones"
				/>
				<img className={styles.header__avatar} src={photo} alt="foto perfil" />
			</div>
		</header>
	);
};

export default Header;
