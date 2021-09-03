import React from 'react'
import Button from '../UI/Button/Button'
import styles from "./Header.module.css"

function Header() {
    return (
        <div className = {styles.header}>
            <p>React Meals</p>
            <Button>Your cart</Button>
        </div>
    )
}

export default Header
