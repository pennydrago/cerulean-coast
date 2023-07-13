export default function FoodCardModal({show, onClose}) {
  return (
    <div>
      { show ?
      <div className="modal-container">
                 
        <div className="modal">

          <main className="modal-content">
            <p>Enjoy this salad for a light meal, ideal with sparkling water.</p> 
            <p>Contains walnuts.</p>
            <p>$18.50</p>
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