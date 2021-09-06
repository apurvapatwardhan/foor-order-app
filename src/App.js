import React, { useState } from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import MealsList from "./components/Meals/MealsList";
import CartContext from "./Context/CartContext";

function App() {
  const [mealData, setMealData] = useState({
    id: Math.random().toString(),
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const [items, setItems] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  const [blurState, setBlur] = useState(false);

  const addHandler = (mealInfo) => {
    setMealData(mealInfo);
    setItems(prev => prev + Number(mealInfo.quantity));
    const item = cartItems.find(ele => ele.id === mealInfo.id)
    if(item) {
      item.quantity = Number(item.quantity) + Number(mealInfo.quantity);
      let newCartItems = cartItems.filter(ele => ele.id !== item.id);
      setCartItems([...newCartItems, item]);
    }
    else{
      setCartItems([...cartItems, mealInfo]);
    }
  };

  const orderHandler = () => {
    setCartItems([]);
    setItems(0);
  }

  const blurHandler = (blurInfo) => {
        setBlur(blurInfo);
  }

  return (
    <CartContext.Provider value = {{mealData: mealData,items: items,cartItems: cartItems}}>
      <div className={`${styles.page} ${blurState ? styles.blur : ""}`}>
        <Header onCartClick = {blurHandler} onOrder = {orderHandler}/>
        <MealsList onAdd={addHandler} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
