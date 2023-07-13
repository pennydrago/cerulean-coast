export default function FoodCardModal({show, onClose, promotion, price}) {
  return (
    <div>
      { show ?
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
      : null}
    </div>
  );
}