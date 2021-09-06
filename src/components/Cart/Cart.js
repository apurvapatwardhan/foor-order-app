import React,{useContext} from "react";
import CartContext from "../../Context/CartContext";
import Button from "../UI/Button/Button";
import styles from "./Cart.module.css";

function Cart(props) {
  

  const ctx = useContext(CartContext);

  return (
    <Button onClick={props.onclick}>
        <i className={`fa fa-shopping-cart`}></i>Your cart <span className={styles.span}>{ctx.items}</span>
    </Button>
  );
}

export default Cart;
