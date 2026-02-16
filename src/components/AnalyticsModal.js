function AnalyticsModal({ habit, onClose }) {
  if (!habit) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{habit.name} Analytics</h2>

        <div className="modal-content">
          <p>
            <strong>Total Completions:</strong>{" "}
            {habit.completedDates.length}
          </p>

          <p>
            <strong>Created:</strong>{" "}
            {habit.createdAt.split("T")[0]}
          </p>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AnalyticsModal;
