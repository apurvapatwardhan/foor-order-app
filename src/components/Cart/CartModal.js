import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem";
import styles from "./CartModal.module.css";

function CartModal(props) {
  const ctx = useContext(CartContext);

  const style = {
    color: "rgb(255 255 255)",
    width: "13%",
    position: "relative",
    top: "10%",
    background: "red",
    left: "86%",
  };

  return (
    <React.Fragment>
      <div className={styles.modal}>
        {ctx.cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            quantity={cartItem.quantity}
            description={cartItem.description}
          />
        ))}
        <Button onClick={props.onclick} style={style}>
          Close
        </Button>
        <Button onClick={props.orderHandler} className={styles.order}>
          Order
        </Button>
      </div>
    </React.Fragment>
  );
}

export default CartModal;
