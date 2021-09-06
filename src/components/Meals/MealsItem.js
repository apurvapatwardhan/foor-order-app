import React,{useState, useRef} from "react";
import Button from "../UI/Button/Button";
import styles from "./MealsItem.module.css";

function MealsItem(props) {

  const inputRef = useRef();

  const [quantity, setQuantity] = useState(0);

  

  const quantityHandler = (e) => {
      setQuantity(e.target.value)
  }

  const addHandler = (e) => {
    e.preventDefault();
    const mealData = {
      id:props.id,
      name: props.name,
      description:props.description,
      price:props.price,
      quantity: quantity
    }
    props.onAdd(mealData);
    inputRef.current.value = ""
  }

  return (
    <React.Fragment>
      <div className={styles.desc}>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <p>{`$${props.price}`}</p>
      </div>
      <div className={styles.inp}>
        <h3>Amount</h3>
        <form>
          <input type="number" min="1" max="20" onChange = {quantityHandler} ref = {inputRef}/>
          <Button type="button" onClick = {addHandler}>
            <i class="fa fa-plus" aria-hidden="true"></i> Add
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default MealsItem;
