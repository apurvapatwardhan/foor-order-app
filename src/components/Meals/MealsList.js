import React, { useState } from "react";
import DUMMY_MEALS from "../../assets/dummy-meals";
import MealsItem from "./MealsItem";
import styles from "./MealsList.module.css"

function MealsList(props) {
  const [mealState, setMealState] = useState(DUMMY_MEALS);

  return (
    <div className={styles.card}>
      {mealState.map((meal) => (
        <MealsItem
          onAdd = {props.onAdd}
          key={meal.id}
          id = {meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        ></MealsItem>
      ))}
    </div>
  );
}

export default MealsList;
