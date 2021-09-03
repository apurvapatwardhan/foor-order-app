import React from 'react'
import styles from "./Button.module.css"

function Button(props) {
    return (
        <React.Fragment>
            <button className ={styles.button} onClick = {props.onClick}>{props.children}</button>
        </React.Fragment>
    )
}

export default Button
