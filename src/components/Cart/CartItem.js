import React from "react";
import styles from "../Meals/MealsItem.module.css";

function CartItem(props) {
  return (
    <div className={styles.desc}>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
      <p>{props.quantity}</p>
    </div>
  );
}

export default CartItem;
