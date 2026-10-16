# 💪 FitLog — Workout Library

**Train with Intent. Log Every Set.**

FitLog is a modern, responsive workout library and fitness planning application designed to help users explore exercises, organize their daily workout plans, and track their fitness activities. Users can browse workouts, view exercise details, save their favorite exercises, and manage their daily training plans through a clean, dark-themed interface.

## 🌐 Live Demo

- **Live Website:** [Visit FitLog](https://fitlog-web-peach.vercel.app/)
- **GitHub Repository:** [View Source Code](https://github.com/hhamidurr/fitlog-web)

## ✨ Key Features

- **🏋️ Workout Library:** Browse a collection of 12 workouts covering major muscle groups, including chest, arms, legs, back, and core.
- **📋 Workout Details:** View exercise images, descriptions, categories, equipment, difficulty levels, sets, reps, duration, calories, ratings, and step-by-step instructions.
- **➕ Today's Plan:** Add workouts to your daily training plan, with a maximum of five exercises.
- **🔖 Save for Later:** Save workouts to a separate list and access them whenever needed.
- **📊 Workout Metrics:** Track the number of planned exercises, total workout duration, and estimated calories.
- **✅ Workout Management:** Mark exercises as completed, remove workouts, and view exercise details directly from your plan.
- **🔍 Sorting:** Sort workouts by duration, calories, or rating.
- **⏳ Loading States:** Display loading UI while workout data is being fetched.
- **🔔 Toast Notifications:** Receive feedback when adding, saving, completing, or removing workouts.
- **📱 Responsive Design:** Enjoy a user-friendly experience on mobile phones, tablets, and desktop screens.
- **💾 Persistent Data:** Use browser localStorage to preserve workout plans and saved items across page reloads, if implemented.
- **🚫 Custom 404 Page:** Display a branded not-found page for invalid routes and unavailable workouts.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | Application framework and routing |
| React | Component-based user interface |
| JavaScript / TypeScript | Application logic |
| Tailwind CSS | Responsive styling and UI design |
| Next.js App Router | Page navigation and dynamic routes |
| Context API | Shared state management for plans and saved workouts |
| REST API / Fetch API | Retrieving workout data |
| Lucide React | Icons and visual elements |
| React Toastify | Toast notifications |
| LocalStorage | Client-side data persistence, if implemented |
| Git & GitHub | Version control and source code hosting |
| Vercel | Deployment |

## 📂 Project Structure

```text
src/
└── app/
    ├── components/
    │   ├── navbar.jsx
    │   ├── banner.jsx
    │   ├── footer.jsx
    │   └── workoutCard.jsx
    ├── context/
    │   └── appContext.jsx
    ├── workouts/
    │   └── [slug]/
    │       ├── page.jsx
    │       └── loading.jsx
    ├── my-plan/
    │   ├── page.jsx
    │   └── loading.jsx
    ├── not-found.jsx
    ├── layout.jsx
    ├── loading.jsx
    ├── page.jsx
    └── globals.css
```

*Note: The structure above is an example. Update the filenames and folders to match your actual project.*

## 🚀 Getting Started

Follow these steps to run FitLog locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm or another compatible package manager
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd fitlog
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

If your project uses an external workout API, create a `.env.local` file in the project root and add the required environment variables.

```env
NEXT_PUBLIC_API_URL=YOUR_WORKOUT_API_URL
```

Replace the example value with your actual API URL. Use the environment variable name expected by your application.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
npm run start
```

## 🧭 Application Routes

| Route | Description |
|---|---|
| `/` | Home page with the hero banner and workout library |
| `/workouts/[slug]` | Dynamic workout details page |
| `/my-plan` | Today's Plan and Saved workouts |
| Invalid routes | Custom 404 page |

## 🎨 Design Highlights

- Dark background for a focused fitness experience.
- Neon lime accent color (`#CCFF00`).
- Bold headings and clear visual hierarchy.
- Responsive workout cards and flexible layouts.
- Consistent buttons, status badges, and interactive feedback.

## 🔮 Future Improvements

- User authentication and personalized workout profiles.
- Workout history and weekly progress tracking.
- Advanced search and muscle-group filters.
- Custom workout creation.
- Cloud-based synchronization across devices.

## 👨‍💻 Author

**Hamidur Rohman**

Frontend Developer | React | Next.js | Tailwind CSS

- **GitHub:** [YOUR_GITHUB_PROFILE_URL](https://github.com/hhamidurr)
- **Portfolio:** [YOUR_PORTFOLIO_URL](https://hhamidurr-ozfg.vercel.app/)

## 📄 License

This project was created for educational and portfolio purposes.

---

**FITLOG — Train with Intent. Log Every Set. 💪**