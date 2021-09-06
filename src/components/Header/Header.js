import React,{useState} from "react";
import Cart from "../Cart/Cart";
import ReactDOM from "react-dom"
import styles from "./Header.module.css";
import CartModal from "../Cart/CartModal";

function Header(props) {

  const [showCartModal, setShowCartModal] = useState(false);

  const cartHandler = () => {
        setShowCartModal(true);
        props.onCartClick(true)
  }

  const cartCloseHandler = () => {
    setShowCartModal(false);
    props.onCartClick(false);
  }

  const orderHandler = () => {
    props.onOrder();
    cartCloseHandler()
  }

  return (
    <React.Fragment>
      <div className={styles.header}>
        <p>React Meals</p>
        <Cart onclick={cartHandler}/>
        {
          showCartModal ? ReactDOM.createPortal(<CartModal onclick = {cartCloseHandler} orderHandler={orderHandler}/>, document.getElementById('modal')) : null
        }
      </div>
      <div className = {styles.bg}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="no"
          className = {styles.img}
        ></img>
        <div>
            Welcome to React Meals Please order whatever you want
            It will be server to you in short span
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
