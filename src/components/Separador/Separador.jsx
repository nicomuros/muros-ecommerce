import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Separador.module.css'


const Separador = ({title}) => {
  return (
    <Container fluid className={`${styles.container}  d-flex align-items-center justify-content-center`}>
        <h2 className={`${styles.text} py-5 my-2 display-1 fw-bolder`}>{title}</h2>
    </Container>
  )
}

export default Separador