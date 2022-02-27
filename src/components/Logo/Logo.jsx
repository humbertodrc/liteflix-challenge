import React from "react";
import styles from "../../../styles/Logo.module.css"

const Logo = () => {
	return (
		<div>
			<p className={styles.header__logo}>
				LITE<span className={styles.header__modifier}>FLIX</span>
			</p>
		</div>
	);
};

export default Logo;
