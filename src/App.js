import { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitCard from "./components/HabitCard";
import Dashboard from "./components/Dashboard";
import AnalyticsModal from "./components/AnalyticsModal";
import {
  calculateStreak,
} from "./utils/streak";

function App() {
  const [habits, setHabits] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedHabit, setSelectedHabit] =
    useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("habits");
    if (stored) setHabits(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  const addHabit = (name, goal) => {
    const newHabit = {
      id: Date.now().toString(),
      name,
      createdAt: new Date().toISOString(),
      completedDates: [],
      goal: goal || 30,
    };
    setHabits([...habits, newHabit]);
  };

  const completeHabit = (id, dateStr) => {
    setHabits(
      habits.map((h) =>
        h.id === id
          ? {
              ...h,
              completedDates:
                h.completedDates.includes(dateStr)
                  ? h.completedDates.filter(
                      (d) => d !== dateStr
                    )
                  : [
                      ...h.completedDates,
                      dateStr,
                    ],
            }
          : h
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  const editHabit = (id, newName) => {
    setHabits(
      habits.map((h) =>
        h.id === id ? { ...h, name: newName } : h
      )
    );
  };

  const today = new Date().toISOString().split("T")[0];

  const stats = {
    totalHabits: habits.length,
    completedToday: habits.filter((h) =>
      h.completedDates.includes(today)
    ).length,
    bestStreak: Math.max(
      0,
      ...habits.map((h) =>
        calculateStreak(h.completedDates)
      )
    ),
    completionRate:
      habits.length === 0
        ? 0
        : Math.round(
            (habits.filter((h) =>
              h.completedDates.includes(today)
            ).length /
              habits.length) *
              100
          ),
  };

  return (
    <div className="app">
      <header className="header">
  <div className="brand">
    <div className="logo-icon">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="white"
      >
        <path d="M13.5 2C13.5 2 15 5 15 7C15 9 13.5 10.5 13.5 10.5C13.5 10.5 12 9 12 7C12 5 13.5 2 13.5 2Z"/>
        <path d="M12 22C8.13 22 5 18.87 5 15C5 11.5 7.5 9 7.5 9C7.5 9 8 12 10.5 13.5C10.5 13.5 11 11 13 10C13 10 13 12 15 13.5C16.5 14.7 17 15.5 17 17C17 19.76 14.76 22 12 22Z"/>
      </svg>
    </div>

    <div className="brand-text">
      <h1>HabitFlow</h1>
      <span>Build consistency daily</span>
    </div>
  </div>
</header>

      <Dashboard stats={stats} />

      <HabitForm addHabit={addHabit} />

      <div className="habit-grid">
        {habits.length === 0 ? (
          <div className="empty-state">
            Start building your streak 🔥
          </div>
        ) : (
          habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              completeHabit={completeHabit}
              deleteHabit={deleteHabit}
              editHabit={editHabit}
              openAnalytics={setSelectedHabit}
            />
          ))
        )}
      </div>

      <AnalyticsModal
        habit={selectedHabit}
        onClose={() => setSelectedHabit(null)}
      />
    </div>
  );
}

export default App;
