import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Titulador.module.css'


const Titulador = ({title}) => {
  return (
    <Container fluid className={`${styles.container}  d-flex align-items-center justify-content-center`}>
        <h2 className={`${styles.text} py-5 my-2 display-1 fw-bolder`}>{title}</h2>
    </Container>
  )
}

export default Titulador