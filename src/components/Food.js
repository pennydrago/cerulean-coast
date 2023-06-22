import React from "react";
import FoodCard from "./FoodCard";

function Food() {
  return (
    <div>
      <div className="container">
        <h2>Food</h2>
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
}

export default Food;