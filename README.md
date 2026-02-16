# 🔥 HabitFlow – Modern Habit Tracking App

HabitFlow is a modern habit tracking web application built with React.  
It helps users build consistency through daily streak tracking, goal-based progress, and a clean, responsive interface.

This project was created to demonstrate frontend development skills including state management, derived data logic, and modular component architecture.

---

## ✨ Features

### 🔥 Habit Management
- Add new habits
- Edit habit names (inline editing)
- Delete habits
- Set custom goal for each habit

### 📅 Streak Tracking
- Automatic consecutive-day streak calculation
- Longest streak tracking
- Prevents duplicate completion for the same day
- Undo completion support

### 🗓 Weekly Tracker
- Clickable 7-day mini calendar
- Visual daily completion indicators
- GitHub-style activity tracking

### 📊 Dashboard Analytics
- Total habits count
- Completed today count
- Best streak across all habits
- Daily completion rate percentage

### 🏆 Achievements
- Bronze badge (7-day streak)
- Silver badge (30-day streak)
- Gold badge (100-day streak)
- Confetti animation on milestone completion

### 🎨 UI & Experience
- Modern gradient design
- Glassmorphism cards
- Custom SVG logo branding
- Responsive layout (mobile friendly)
- Smooth hover animations
- Empty state UI
- Dark mode ready

### 💾 Data Persistence
- Uses localStorage
- No backend required
- All streaks calculated dynamically from stored dates

---

## 🧠 Technical Highlights

- React (Functional Components)
- React Hooks (useState, useEffect)
- Derived state calculations (streaks are not stored directly)
- Utility-based streak logic
- Reusable component structure
- Clean CSS styling
- Lightweight architecture

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── HabitCard.js
 │    ├── HabitForm.js
 │    ├── Dashboard.js
 │    ├── AnalyticsModal.js
 │
 ├── utils/
 │    ├── streak.js
 │
 ├── App.js
 ├── styles.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/habitflow.git
cd habitflow
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## 🎯 Purpose of This Project

HabitFlow was built as a portfolio-level frontend application to simulate a real-world productivity SaaS product.

It demonstrates:

- State management
- UI/UX thinking
- Component-based architecture
- Data-driven rendering
- Clean project organization
- Feature-rich frontend logic

---

## 🚀 Future Improvements

- Deployment on Vercel
- Add charts dashboard
- Drag-and-drop habit reordering
- PWA support
- Backend integration
- User authentication

---

## 🛠 Built With

- React
- JavaScript (ES6+)
- CSS3
- Canvas Confetti

---

## 📄 License

This project is open-source and available under the MIT License.

---

⭐ If you found this project helpful or interesting, feel free to star the repository.
