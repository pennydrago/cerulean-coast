import FoodCard from "./FoodCard";
import FoodCardModal from "./FoodCardModal";
import { useState } from "react";

export default function FoodList({foodItems}) {

  const [clickedFoodItem, setClickedFoodItem] = useState(null);

  function handleModalShow(foodItem) {
    setClickedFoodItem(foodItem);    
  }

  function handleModalHide() {
    setClickedFoodItem(null);    
  }
  
  return (
    <div>
      {foodItems.map((foodItem) =>
          <FoodCard key={foodItem.id} foodItem={foodItem} onModalShow={handleModalShow} />
      )}
      {clickedFoodItem && <FoodCardModal onClose={handleModalHide} promotion={clickedFoodItem.promotion} /> }
    </div>
  );
}