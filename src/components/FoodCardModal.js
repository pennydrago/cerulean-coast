export default function FoodCardModal({onClose, promotion, price}) {
  return (
      <div className="modal-container">
        <div className="modal">
          <main className="modal-content">
            <p>{promotion}</p>
            <p>{price}</p>
          </main>
          <footer>
            <button onClick={onClose}>Close</button>
          </footer>
        </div>
      </div>
  );
}