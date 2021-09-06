import React from 'react'
import styles from "./Button.module.css"

function Button(props) {
    return (
        <React.Fragment>
            <button style ={props.style} className ={`${styles.button} ${props.className}`} onClick = {props.onClick}>{props.children}</button>
        </React.Fragment>
    )
}

export default Button
