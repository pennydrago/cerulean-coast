import { useState } from "react";
import FoodCardModal from "./FoodCardModal";

export default function FoodCard({foodItem}) {
  
  const [modal, setModal] = useState(false);
  
  function handleModalShow() {
    setModal(true);    
  }

  function handleModalHide() {
    setModal(false);    
  }
  
  return (
    <>
      <div className="food-card" onClick={handleModalShow}>
        <div className='food-image'>
          <img src={foodItem.imageSource} alt={foodItem.imageAltText} />
        </div>
        <div className="food-info">
          <h3>{foodItem.name}</h3>
          <p>{foodItem.description}</p>
        </div>
      </div>
      <FoodCardModal show={modal} onClose={handleModalHide} />
    </>
  );
}