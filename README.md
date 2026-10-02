# FitLog

A modern and responsive workout tracking web application built with Next.js and TypeScript. FitLog helps users explore workouts, create a daily workout plan, save workouts for later, and track completed exercises.

## Live Demo

https://fitlog-moxie-101.netlify.app/

## Project Overview

FitLog is a fitness-focused web application designed to make workout planning and tracking simple.

Users can browse a workout library, view detailed workout information, add workouts to their daily plan, save workouts for later, and mark completed workouts.

The application features a modern dark gym-inspired interface with responsive layouts for mobile, tablet, and desktop devices.

## Screenshot

> Add your project screenshot here.

<!-- Replace the line above with your screenshot after uploading it to the repository. -->

## Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Toastify
* Lucide React
* REST API

## Main Features

* Browse workout library
* View detailed workout information
* Search workouts
* Sort workouts by duration, calories, and rating
* Add workouts to Today's Plan
* Save workouts for later
* Remove workouts from plans and saved workouts
* Mark workouts as completed
* Track workout progress
* Maximum of five active workouts in Today's Plan
* Responsive design for mobile, tablet, and desktop
* Toast notifications for user actions
* Custom loading states and skeleton UI
* 404 handling for invalid workout routes

## Dependencies

Main dependencies used in this project:

* `next`
* `react`
* `react-dom`
* `react-toastify`
* `lucide-react`

Development tools include:

* TypeScript
* Tailwind CSS
* ESLint

## API

FitLog uses the following API:

```text
https://api.abcz.workers.dev/api/fitlog
```

Workout details are fetched using:

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

```text
http://localhost:3000
```

## Available Scripts

### Development

```bash
npm run dev
```

Runs the application in development mode.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm start
```

Starts the application in production mode.

### Lint

```bash
npm run lint
```

Checks the project for linting issues.

## Project Structure

```text
src/
├── app/
├── components/
├── context/
└── types/

public/
```

## Responsive Design

FitLog is designed to work across:

* Mobile devices
* Tablets
* Desktop screens

## Future Improvements

* User authentication
* Personal workout history
* More advanced progress tracking
* Workout categories and filters
* User-specific workout recommendations

## Author

**Shahariar Hossen Akib**

Frontend Developer • Next.js Learner • Computer Technology Student

## Live Project

https://fitlog-moxie-101.netlify.app/
