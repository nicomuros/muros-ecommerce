import React from 'react'
import styles from "./CustomButton.module.css"
const CustomButton = ({text, paddingReceived = "0px 50px"}) => {
  return (
    <button className={styles.buttn} style={{
      padding: paddingReceived
    }}>{text}</button>
  )
}

export default CustomButton