import { useState } from "react";

function HabitForm({ addHabit }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    addHabit(name, goal);
    setName("");
    setGoal(30);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="habit-form"
    >
      <input
        type="text"
        placeholder="Enter new habit..."
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="number"
        min="1"
        value={goal}
        onChange={(e) =>
          setGoal(e.target.value)
        }
        className="goal-input"
      />

      <button type="submit">
        Add Habit
      </button>
    </form>
  );
}

export default HabitForm;
