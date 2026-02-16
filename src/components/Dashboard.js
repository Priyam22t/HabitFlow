function Dashboard({ stats }) {
  return (
    <div className="dashboard">
      <div className="stat-card">
        <h4>Total Habits</h4>
        <p>{stats.totalHabits}</p>
      </div>

      <div className="stat-card">
        <h4>Completed Today</h4>
        <p>{stats.completedToday}</p>
      </div>

      <div className="stat-card">
        <h4>Best Streak</h4>
        <p>{stats.bestStreak} 🔥</p>
      </div>

      <div className="stat-card">
        <h4>Completion Rate</h4>
        <p>{stats.completionRate}%</p>
      </div>
    </div>
  );
}

export default Dashboard;
