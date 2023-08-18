export default function FoodCardModal({onClose, promotion}) {
  return (
      <div className="modal-container">
        <div className="modal">
          <main className="modal-content">
            <p>{promotion}</p>
          </main>
          <footer>
            <button onClick={onClose}>Close</button>
          </footer>
        </div>
      </div>
  );
}