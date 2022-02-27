import styles from "../../../styles/Title.module.css"
import styled from "@emotion/styled"

const Heading = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 10px auto;
  letter-spacing: 12px;
  color: #64EEBC;
  text-transform: uppercase;
  font-weight: bold;
`

const PreTitle = styled.p`
  font-size: 20px;
  line-height: 22px;
  margin: 0;
  letter-spacing: 4px;
  color: #fff;
  text-align: center;
`

function Title({titleMovie}) {
  return (
    <div className={styles.title}>
      <PreTitle>ORIGINAL DE LITEFLIX</PreTitle>
      <Heading>{titleMovie}</Heading>
    </div>
  )
}

export default Title