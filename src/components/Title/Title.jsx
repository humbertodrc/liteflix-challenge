import styles from "../../../styles/Title.module.css"
import styled from "@emotion/styled"

const Heading = styled.h1`
  font-size: 48px;
  text-align: center;
  margin: 0;
  letter-spacing: 12px;
  color: #64EEBC;
  text-transform: uppercase;
  font-weight: bold;
  @media (min-width: 768px){
    font-size: 120px;
    line-height: 100px;
    text-align: left;
    letter-spacing: 16px;
    margin-top: 1rem;
  }
`

const PreTitle = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 22px;
  margin: 0;
  letter-spacing: 4px;
  color: #fff;
  @media (min-width: 768px){
    text-align: left;
    margin-top: 5rem;
  }
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