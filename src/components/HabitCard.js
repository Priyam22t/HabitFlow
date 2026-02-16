import { useState } from "react";
import confetti from "canvas-confetti";
import {
  calculateStreak,
  calculateLongestStreak,
} from "../utils/streak";

function HabitCard({
  habit,
  completeHabit,
  deleteHabit,
  editHabit,
  openAnalytics,
}) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(habit.name);

  const today = new Date().toISOString().split("T")[0];
  const streak = calculateStreak(habit.completedDates);
  const longest = calculateLongestStreak(
    habit.completedDates
  );

  const progress = Math.min(
    100,
    Math.round((streak / habit.goal) * 100)
  );

  const handleComplete = () => {
    completeHabit(habit.id, today);

    if (streak === 6 || streak === 29) {
      confetti();
    }
  };

  return (
    <div className="habit-card">
      {editing ? (
        <input
          value={newName}
          onChange={(e) =>
            setNewName(e.target.value)
          }
          onBlur={() => {
            editHabit(habit.id, newName);
            setEditing(false);
          }}
          autoFocus
        />
      ) : (
        <h3 onDoubleClick={() => setEditing(true)}>
          {habit.name}
        </h3>
      )}

      <div className="stats">
        <span>🔥 {streak}</span>
        <span>🏆 {longest}</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Weekly Calendar */}
      <div className="week">
        {[...Array(7)].map((_, i) => {
          const d = new Date();
          d.setDate(d.getDate() - (6 - i));
          const dateStr = d.toISOString().split("T")[0];
          const done =
            habit.completedDates.includes(dateStr);

          return (
            <div
              key={i}
              className={`day ${done ? "done" : ""}`}
              onClick={() =>
                completeHabit(habit.id, dateStr)
              }
            />
          );
        })}
      </div>

      <div className="btn-group">
        <button onClick={handleComplete}>
          {habit.completedDates.includes(today)
            ? "Undo"
            : "Complete"}
        </button>

        <button onClick={() => openAnalytics(habit)}>
          📊
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteHabit(habit.id)
          }
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default HabitCard;
