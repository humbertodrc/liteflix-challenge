import styles from "../../../styles/Title.module.css"

function Title({titleMovie}) {
  return (
    <div className={styles.title}>{titleMovie}</div>
  )
}

export default Title